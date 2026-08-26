import { get, set, del } from 'idb-keyval';
import { CapturedPhoto } from '../types';

const STORAGE_KEY = 'camera_app_photos_v1';

export async function getStoredPhotos(): Promise<CapturedPhoto[]> {
  try {
    const photos = await get<CapturedPhoto[]>(STORAGE_KEY);
    return photos || [];
  } catch (err) {
    console.error('Failed to load photos from IndexedDB:', err);
    // Fallback to localStorage for small previews if idb fails
    try {
      const fallback = localStorage.getItem(STORAGE_KEY);
      return fallback ? JSON.parse(fallback) : [];
    } catch {
      return [];
    }
  }
}

export async function savePhoto(photo: CapturedPhoto): Promise<CapturedPhoto[]> {
  try {
    const existing = await getStoredPhotos();
    const updated = [photo, ...existing];
    await set(STORAGE_KEY, updated);
    return updated;
  } catch (err) {
    console.error('Failed to save photo to IndexedDB:', err);
    return [photo];
  }
}

export async function deletePhoto(id: string): Promise<CapturedPhoto[]> {
  try {
    const existing = await getStoredPhotos();
    const updated = existing.filter((p) => p.id !== id);
    await set(STORAGE_KEY, updated);
    return updated;
  } catch (err) {
    console.error('Failed to delete photo:', err);
    return [];
  }
}

export async function updatePhoto(photo: CapturedPhoto): Promise<CapturedPhoto[]> {
  try {
    const existing = await getStoredPhotos();
    const updated = existing.map((p) => (p.id === photo.id ? photo : p));
    await set(STORAGE_KEY, updated);
    return updated;
  } catch (err) {
    console.error('Failed to update photo:', err);
    return [];
  }
}

export async function clearAllPhotos(): Promise<void> {
  try {
    await del(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear photos:', err);
  }
}

/**
 * Trigger browser file download of a captured photo as high-res JPG
 */
export function downloadPhotoJpg(photo: CapturedPhoto, filenamePrefix = 'IMG'): void {
  const dateStr = new Date(photo.timestamp).toISOString().replace(/[:.]/g, '-');
  const filename = `${filenamePrefix}_${dateStr}.jpg`;

  const link = document.createElement('a');
  link.href = photo.dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
