export type UserRole = "student" | "teacher" | "admin";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Chapter {
  timeSeconds: number;
  timeFormatted: string;
  title: string;
}

export interface ResourceAttachment {
  id: string;
  title: string;
  type: "pdf" | "doc" | "link" | "exercise";
  size?: string;
  url: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  videoId?: string;
  courseId?: string;
  passingScore: number; // e.g. 70%
  questions: QuizQuestion[];
}

export interface QuizSubmissionResult {
  id: string;
  quizId: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timestamp: number;
  selectedAnswers: number[];
}

export interface VideoComment {
  id: string;
  videoId: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  authorRole?: UserRole;
  text: string;
  timestamp: string;
  likes: number;
  userLiked?: boolean;
  replies?: VideoComment[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // fallback mp4 or direct video
  embedUrl?: string; // youtube-nocookie or iframe embed
  thumbnailUrl: string;
  duration: string; // e.g. "14:20"
  durationSeconds: number;
  views: number;
  uploadDate: string;
  category: string;
  level: DifficultyLevel;
  channelId: string;
  channelName: string;
  channelAvatar: string;
  channelSubscribers: number;
  likes: number;
  dislikes: number;
  isLiked?: boolean;
  isDisliked?: boolean;
  isSaved?: boolean;
  tags: string[];
  courseId?: string;
  courseTitle?: string;
  courseLessonIndex?: number;
  chapters: Chapter[];
  quiz?: Quiz;
  resources: ResourceAttachment[];
  transcript?: string;
  isFeatured?: boolean;
  status?: "published" | "pending_review" | "reported";
}

export interface CourseLesson {
  id: string;
  videoId: string;
  title: string;
  duration: string;
  order: number;
  isCompleted?: boolean;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  level: DifficultyLevel;
  instructorId: string;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  thumbnailUrl: string;
  bannerUrl?: string;
  totalLessons: number;
  totalDuration: string;
  enrolledStudents: number;
  rating: number;
  reviewCount: number;
  lessons: CourseLesson[];
  certificateEligible: boolean;
  finalQuizId?: string;
  requirements: string[];
  learningOutcomes: string[];
  isFeatured?: boolean;
}

export interface EducationalShort {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  channelId: string;
  channelName: string;
  channelAvatar: string;
  views: number;
  likes: number;
  commentsCount: number;
  tags: string[];
  keyTakeaway: string;
  category: string;
}

export interface Channel {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  banner: string;
  bio: string;
  subscribersCount: number;
  isVerified: boolean;
  totalVideos: number;
  joinedDate: string;
  categories: string[];
  about: string;
  socialLinks?: {
    website?: string;
    youtube?: string;
    facebook?: string;
  };
  isSubscribed?: boolean;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  studentName: string;
  studentId: string;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  issueDate: string;
  grade: string;
  verified: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  bio: string;
  streakDays: number;
  totalHoursWatched: number;
  savedVideoIds: string[];
  likedVideoIds: string[];
  subscribedChannelIds: string[];
  watchHistory: {
    videoId: string;
    watchedSeconds: number;
    totalSeconds: number;
    lastWatched: number; // timestamp
  }[];
  courseProgress: {
    [courseId: string]: {
      completedLessonIds: string[];
      progressPercentage: number;
      isFinished: boolean;
      finishedDate?: string;
    };
  };
  quizSubmissions: QuizSubmissionResult[];
  certificates: Certificate[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  videoCount: number;
  courseCount: number;
  popularTopics: string[];
}

export type ActiveTab = 
  | "home"
  | "categories"
  | "shorts"
  | "courses"
  | "course-detail"
  | "watch"
  | "channel"
  | "saved"
  | "profile"
  | "teacher-studio"
  | "admin"
  | "quiz-arena";
