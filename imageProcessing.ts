import { AspectRatio, DocumentFilterType, WhiteBalanceMode } from '../types';

/**
 * Calculates target crop dimensions and offsets given the source video size and target aspect ratio.
 */
export function calculateAspectCrop(
  srcWidth: number,
  srcHeight: number,
  aspectRatio: AspectRatio
): { cropX: number; cropY: number; cropWidth: number; cropHeight: number } {
  let targetRatio = srcWidth / srcHeight;

  if (aspectRatio === '4:3') {
    targetRatio = 4 / 3;
  } else if (aspectRatio === '16:9') {
    targetRatio = 16 / 9;
  } else if (aspectRatio === '1:1') {
    targetRatio = 1;
  } else if (aspectRatio === 'full') {
    return { cropX: 0, cropY: 0, cropWidth: srcWidth, cropHeight: srcHeight };
  }

  const currentRatio = srcWidth / srcHeight;

  let cropWidth = srcWidth;
  let cropHeight = srcHeight;
  let cropX = 0;
  let cropY = 0;

  if (currentRatio > targetRatio) {
    // Source is wider than target: crop horizontally
    cropWidth = srcHeight * targetRatio;
    cropX = (srcWidth - cropWidth) / 2;
  } else {
    // Source is taller than target: crop vertically
    cropHeight = srcWidth / targetRatio;
    cropY = (srcHeight - cropHeight) / 2;
  }

  return {
    cropX: Math.round(cropX),
    cropY: Math.round(cropY),
    cropWidth: Math.round(cropWidth),
    cropHeight: Math.round(cropHeight),
  };
}

/**
 * Applies professional document scan filters onto canvas image data
 */
export function applyDocumentFilter(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  filterType: DocumentFilterType
): void {
  if (filterType === 'original') return;

  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;
  const len = data.length;

  if (filterType === 'document_bw') {
    // High-contrast clean paper B&W: Adaptive thresholding
    for (let i = 0; i < len; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // Luminance
      const luma = 0.299 * r + 0.587 * g + 0.114 * b;
      // High contrast S-curve with paper boost
      const val = luma > 140 ? 255 : luma < 90 ? 0 : Math.min(255, (luma - 90) * 5.1);
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
    }
  } else if (filterType === 'document_color') {
    // Whitens paper background while keeping colored pens/stamps vivid
    for (let i = 0; i < len; i += 4) {
      let r = data[i];
      let g = data[i + 1];
      let b = data[i + 2];

      const luma = 0.299 * r + 0.587 * g + 0.114 * b;
      if (luma > 180) {
        // Whiten bright areas (paper)
        const boost = (luma - 180) / 75;
        r = Math.min(255, r + (255 - r) * boost * 0.8);
        g = Math.min(255, g + (255 - g) * boost * 0.8);
        b = Math.min(255, b + (255 - b) * boost * 0.8);
      } else {
        // Boost contrast on text
        r = Math.max(0, (r - 20) * 1.15);
        g = Math.max(0, (g - 20) * 1.15);
        b = Math.max(0, (b - 20) * 1.15);
      }
      data[i] = Math.min(255, r);
      data[i + 1] = Math.min(255, g);
      data[i + 2] = Math.min(255, b);
    }
  } else if (filterType === 'grayscale') {
    for (let i = 0; i < len; i += 4) {
      const luma = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      data[i] = luma;
      data[i + 1] = luma;
      data[i + 2] = luma;
    }
  } else if (filterType === 'high_contrast') {
    // Extreme contrast for receipts and pencil drafts
    for (let i = 0; i < len; i += 4) {
      const luma = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      const val = luma > 125 ? 255 : 0;
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
    }
  } else if (filterType === 'warm_scan') {
    for (let i = 0; i < len; i += 4) {
      data[i] = Math.min(255, data[i] * 1.08); // +red
      data[i + 1] = Math.min(255, data[i + 1] * 1.03); // +green
      data[i + 2] = Math.max(0, data[i + 2] * 0.92); // -blue
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

/**
 * CSS filter string corresponding to White Balance & EV compensation settings
 */
export function getCameraCssFilter(
  whiteBalance: WhiteBalanceMode,
  ev: number,
  digitalZoom = 1
): string {
  const filters: string[] = [];

  // EV exposure compensation (-3 to +3) -> brightness (0.5 to 1.7)
  const brightness = 1 + ev * 0.18;
  if (Math.abs(brightness - 1) > 0.01) {
    filters.push(`brightness(${brightness.toFixed(2)})`);
  }

  // White balance color temperature
  switch (whiteBalance) {
    case 'daylight':
      filters.push('saturate(1.05) contrast(1.02)');
      break;
    case 'cloudy':
      filters.push('sepia(0.12) saturate(1.1) hue-rotate(-5deg)');
      break;
    case 'incandescent': // Cooling filter to counteract warm tungsten bulbs
      filters.push('hue-rotate(20deg) saturate(1.1) brightness(1.05)');
      break;
    case 'fluorescent': // Warm magenta tint to counteract green fluorescent
      filters.push('hue-rotate(-15deg) saturate(1.05)');
      break;
    case 'auto':
    default:
      break;
  }

  return filters.length > 0 ? filters.join(' ') : 'none';
}

/**
 * Calculates live histogram data from a video element or canvas
 */
export function calculateHistogram(
  source: HTMLVideoElement | HTMLCanvasElement,
  sampleWidth = 160,
  sampleHeight = 90
): { r: number[]; g: number[]; b: number[]; luma: number[] } {
  const canvas = document.createElement('canvas');
  canvas.width = sampleWidth;
  canvas.height = sampleHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  const rBins = new Array(32).fill(0);
  const gBins = new Array(32).fill(0);
  const bBins = new Array(32).fill(0);
  const lumaBins = new Array(32).fill(0);

  if (!ctx) return { r: rBins, g: gBins, b: bBins, luma: lumaBins };

  try {
    ctx.drawImage(source, 0, 0, sampleWidth, sampleHeight);
    const imgData = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
    const data = imgData.data;
    const totalPixels = sampleWidth * sampleHeight;

    for (let i = 0; i < data.length; i += 16) {
      // Step by 4 pixels for maximum speed
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const luma = 0.299 * r + 0.587 * g + 0.114 * b;

      rBins[Math.min(31, Math.floor(r / 8))]++;
      gBins[Math.min(31, Math.floor(g / 8))]++;
      bBins[Math.min(31, Math.floor(b / 8))]++;
      lumaBins[Math.min(31, Math.floor(luma / 8))]++;
    }

    // Normalize
    const maxVal = Math.max(...lumaBins, 1);
    return {
      r: rBins.map((v) => v / maxVal),
      g: gBins.map((v) => v / maxVal),
      b: bBins.map((v) => v / maxVal),
      luma: lumaBins.map((v) => v / maxVal),
    };
  } catch {
    return { r: rBins, g: gBins, b: bBins, luma: lumaBins };
  }
}

/**
 * Estimates data URL byte size
 */
export function estimateDataUrlSize(dataUrl: string): number {
  const head = 'data:image/jpeg;base64,';
  const base64Length = dataUrl.length - (dataUrl.startsWith(head) ? head.length : 0);
  return Math.round((base64Length * 3) / 4);
}

/**
 * Format bytes to readable string (e.g. 2.4 MB)
 */
export function formatBytes(bytes: number): string {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}
