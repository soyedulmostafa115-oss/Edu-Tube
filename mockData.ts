import {
  CategoryInfo,
  Channel,
  Course,
  EducationalShort,
  UserProfile,
  Video,
  Certificate
} from "../types";

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "english",
    name: "English",
    slug: "english",
    iconName: "Languages",
    color: "text-blue-600",
    bgColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
    borderColor: "border-blue-200 dark:border-blue-800",
    description: "Master spoken English, active listening, fluency, and business communication.",
    videoCount: 48,
    courseCount: 6,
    popularTopics: ["Spoken English", "Daily Phrases", "Pronunciation", "Fluency Drills", "Public Speaking"],
  },
  {
    id: "grammar",
    name: "Grammar",
    slug: "grammar",
    iconName: "BookOpen",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    description: "Understand tenses, prepositions, clauses, active-passive voice, and sentence structures.",
    videoCount: 36,
    courseCount: 4,
    popularTopics: ["All 12 Tenses", "Preposition Tricks", "Subject-Verb Agreement", "Common Mistakes"],
  },
  {
    id: "mathematics",
    name: "Mathematics",
    slug: "mathematics",
    iconName: "Binary",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    description: "From elementary arithmetic to advanced calculus, linear algebra, and geometry.",
    videoCount: 52,
    courseCount: 7,
    popularTopics: ["Calculus I & II", "Quadratic Equations", "Trigonometry", "Mental Math Shortcuts"],
  },
  {
    id: "science",
    name: "Science",
    slug: "science",
    iconName: "Atom",
    color: "text-purple-600",
    bgColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300",
    borderColor: "border-purple-200 dark:border-purple-800",
    description: "Explore Physics, Chemistry, Biology, and Astronomy with visual simulations.",
    videoCount: 44,
    courseCount: 5,
    popularTopics: ["Newton's Laws", "Periodic Table", "Cell Biology", "Optics & Light", "Electricity"],
  },
  {
    id: "ict",
    name: "ICT & Coding",
    slug: "ict",
    iconName: "Cpu",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300",
    borderColor: "border-cyan-200 dark:border-cyan-800",
    description: "Computer science basics, programming in Python/JavaScript, web development, and IT literacy.",
    videoCount: 60,
    courseCount: 8,
    popularTopics: ["Python for Beginners", "Web Development", "Database Basics", "Cyber Safety"],
  },
  {
    id: "ielts",
    name: "IELTS Prep",
    slug: "ielts",
    iconName: "GraduationCap",
    color: "text-amber-600",
    bgColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
    borderColor: "border-amber-200 dark:border-amber-800",
    description: "Comprehensive preparation for IELTS Academic & General (Speaking, Writing, Reading, Listening).",
    videoCount: 32,
    courseCount: 4,
    popularTopics: ["Band 8+ Speaking", "Writing Task 1 & 2", "Reading Skimming", "Mock Tests"],
  },
  {
    id: "general-knowledge",
    name: "General Knowledge",
    slug: "general-knowledge",
    iconName: "Globe",
    color: "text-rose-600",
    bgColor: "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
    borderColor: "border-rose-200 dark:border-rose-800",
    description: "World geography, history, global affairs, famous discoveries, and trivia.",
    videoCount: 28,
    courseCount: 3,
    popularTopics: ["World Map & Oceans", "Historic Milestones", "Space Exploration", "Current Affairs"],
  },
  {
    id: "school-lessons",
    name: "School Lessons",
    slug: "school-lessons",
    iconName: "School",
    color: "text-teal-600",
    bgColor: "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300",
    borderColor: "border-teal-200 dark:border-teal-800",
    description: "Classroom curriculum aligned with secondary and higher secondary school boards.",
    videoCount: 40,
    courseCount: 5,
    popularTopics: ["Class 9-10 Physics", "Class 11 Chemistry", "High School Math", "Social Studies"],
  },
  {
    id: "exam-prep",
    name: "Exam Preparation",
    slug: "exam-prep",
    iconName: "CheckSquare",
    color: "text-orange-600",
    bgColor: "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300",
    borderColor: "border-orange-200 dark:border-orange-800",
    description: "Competitive exam strategies, time management, mock questions, and solution breakdowns.",
    videoCount: 35,
    courseCount: 4,
    popularTopics: ["Time Management", "MCQ Solving Tricks", "Previous Year Papers", "Study Timetable"],
  },
];

export const CHANNELS: Channel[] = [
  {
    id: "shofiul-english",
    name: "Shofiul English Academy",
    handle: "@shofiul_english",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
    bio: "Empowering millions to speak English fluently and ace IELTS with confidence. Certified Cambridge trainer.",
    subscribersCount: 245000,
    isVerified: true,
    totalVideos: 142,
    joinedDate: "Jan 2022",
    categories: ["English", "Grammar", "IELTS", "Communication Skills"],
    about: "Welcome to Shofiul English Academy! We provide structured video lectures, downloadable audio exercises, spoken English drill routines, and IELTS Band 8+ strategies. Our mission is to make quality English education free and accessible to every learner.",
    socialLinks: {
      website: "https://shofiulenglish.edu",
      youtube: "https://youtube.com/@shofiul_english",
      facebook: "https://facebook.com/shofiulenglish"
    }
  },
  {
    id: "khan-science",
    name: "Khan Science & Physics Hub",
    handle: "@khansciencehub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200&auto=format&fit=crop&q=80",
    bio: "Visual science lectures, physics experiments, and concept breakdowns with animated diagrams.",
    subscribersCount: 380000,
    isVerified: true,
    totalVideos: 210,
    joinedDate: "Mar 2021",
    categories: ["Science", "School Lessons", "Exam Preparation"],
    about: "Khan Science Hub makes difficult physics and chemistry concepts crystal clear through interactive visual explanations, real laboratory experiments, and formula derivations.",
  },
  {
    id: "dr-sarah-math",
    name: "Dr. Sarah Math Studio",
    handle: "@drsarah_math",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80",
    bio: "PhD in Mathematics. Simplifying calculus, algebra, and geometry with step-by-step whiteboard methods.",
    subscribersCount: 195000,
    isVerified: true,
    totalVideos: 98,
    joinedDate: "Aug 2022",
    categories: ["Mathematics", "Exam Preparation"],
    about: "Math shouldn't be intimidating. Join Dr. Sarah as she deconstructs every algebraic formula, derivative, and geometric proof into simple logical patterns.",
  },
  {
    id: "techcraft-ict",
    name: "TechCraft ICT Academy",
    handle: "@techcraft_ict",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    bio: "Learn practical programming, ICT school syllabus, web development, and data concepts effortlessly.",
    subscribersCount: 160000,
    isVerified: true,
    totalVideos: 85,
    joinedDate: "Nov 2022",
    categories: ["ICT", "School Lessons"],
    about: "TechCraft ICT Academy bridges the digital divide with hands-on coding tutorials, computer networking fundamentals, and full-stack development bootcamps.",
  },
  {
    id: "global-prep",
    name: "Global Knowledge & Exam Prep",
    handle: "@global_prep",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    bio: "World history, geography, current affairs, and comprehensive competitive examination mastery.",
    subscribersCount: 120000,
    isVerified: false,
    totalVideos: 64,
    joinedDate: "Feb 2023",
    categories: ["General Knowledge", "Exam Preparation"],
    about: "Stay sharp with high-yield general knowledge briefings, geopolitical overviews, and test-taking strategies.",
  }
];

export const VIDEOS: Video[] = [
  // 1. Spoken English Course Lesson 1 (Greetings)
  {
    id: "vid-eng-01",
    title: "Lesson 1: Professional & Casual Greetings in English",
    description: "Welcome to Lesson 1 of the Spoken English Beginner Course! Master how to introduce yourself and greet native speakers with natural rhythm, correct tone, and friendly body language. Learn the crucial difference between formal business greetings and relaxed daily expressions.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80",
    duration: "12:45",
    durationSeconds: 765,
    views: 89400,
    uploadDate: "3 days ago",
    category: "English",
    level: "Beginner",
    channelId: "shofiul-english",
    channelName: "Shofiul English Academy",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 245000,
    likes: 4820,
    dislikes: 24,
    tags: ["Spoken English", "Greetings", "English for Beginners", "Shofiul English", "Pronunciation"],
    courseId: "course-spoken-english-01",
    courseTitle: "Spoken English Beginner Course",
    courseLessonIndex: 1,
    isFeatured: true,
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "Introduction & Why Greetings Matter" },
      { timeSeconds: 140, timeFormatted: "2:20", title: "Formal Greetings (Morning, Afternoon, Evening)" },
      { timeSeconds: 380, timeFormatted: "6:20", title: "Casual & Friendly Expressions (Hey, What's up)" },
      { timeSeconds: 560, timeFormatted: "9:20", title: "How to Respond Naturally" },
      { timeSeconds: 690, timeFormatted: "11:30", title: "Summary & Practice Drills" }
    ],
    quiz: {
      id: "quiz-eng-01",
      videoId: "vid-eng-01",
      courseId: "course-spoken-english-01",
      title: "Lesson 1 Quiz: English Greetings & Etiquette",
      description: "Test your understanding of formal vs casual greetings and natural replies.",
      passingScore: 75,
      questions: [
        {
          id: "q1",
          question: "Which of the following is the most suitable greeting in a formal business meeting?",
          options: ["Good morning, ladies and gentlemen", "Yo! What's cracking?", "Hey guys, what's up?", "Hiya mate"],
          correctIndex: 0,
          explanation: "'Good morning, ladies and gentlemen' maintains professional decorum in formal contexts."
        },
        {
          id: "q2",
          question: "When someone says 'How do you do?' for the first time in formal English, what is the traditional response?",
          options: ["I'm doing well, thank you. How do you do?", "I was eating pizza", "Goodbye", "Not your business"],
          correctIndex: 0,
          explanation: "In formal English, acknowledging with 'How do you do?' or polite confirmation is standard."
        },
        {
          id: "q3",
          question: "What is an appropriate response to 'How's it going?' among friends?",
          options: ["Pretty good, thanks! How about you?", "Yes, I am a human", "Tomorrow at 5 PM", "I refuse to speak"],
          correctIndex: 0,
          explanation: "'Pretty good, thanks! How about you?' is friendly, warm, and natural."
        },
        {
          id: "q4",
          question: "At 7:30 PM, which greeting should you use when arriving at an event?",
          options: ["Good evening", "Good night", "Good afternoon", "Good morning"],
          correctIndex: 0,
          explanation: "'Good evening' is a greeting on arrival; 'Good night' is only used when saying farewell or going to sleep."
        }
      ]
    },
    resources: [
      { id: "r1", title: "Greetings & Polite Responses Cheat Sheet.pdf", type: "pdf", size: "1.4 MB", url: "#" },
      { id: "r2", title: "Audio Pronunciation Practice Drill.mp3", type: "exercise", size: "4.2 MB", url: "#" }
    ],
    transcript: "Welcome to Shofiul English Academy! Today in Lesson 1 of our Spoken English Beginner Course, we will master English greetings..."
  },

  // 2. Spoken English Course Lesson 2 (Self Introduction)
  {
    id: "vid-eng-02",
    title: "Lesson 2: Confident Self Introduction in English",
    description: "Learn how to give an impressive, concise, and professional self-introduction in interviews, classrooms, or social gatherings. Avoid common translation mistakes and speak with poise.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
    duration: "15:10",
    durationSeconds: 910,
    views: 65200,
    uploadDate: "5 days ago",
    category: "English",
    level: "Beginner",
    channelId: "shofiul-english",
    channelName: "Shofiul English Academy",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 245000,
    likes: 3950,
    dislikes: 18,
    tags: ["Self Introduction", "Speaking Skills", "Job Interview", "Spoken English"],
    courseId: "course-spoken-english-01",
    courseTitle: "Spoken English Beginner Course",
    courseLessonIndex: 2,
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "The 3-Step Self-Intro Framework" },
      { timeSeconds: 210, timeFormatted: "3:30", title: "Name, Origin & Background" },
      { timeSeconds: 490, timeFormatted: "8:10", title: "Profession, Passions & Goals" },
      { timeSeconds: 780, timeFormatted: "13:00", title: "Common Mistakes (Myself vs I am)" }
    ],
    quiz: {
      id: "quiz-eng-02",
      videoId: "vid-eng-02",
      courseId: "course-spoken-english-01",
      title: "Lesson 2 Quiz: Self Introduction",
      description: "Check your knowledge of grammatically sound self-introductions.",
      passingScore: 75,
      questions: [
        {
          id: "q1",
          question: "Which of the following is grammatically correct to state your name?",
          options: ["My name is Alex / I am Alex", "Myself Alex", "Me is Alex", "Alex is myself"],
          correctIndex: 0,
          explanation: "Never use 'Myself + Name' to introduce yourself. Use 'My name is...' or 'I am...'."
        },
        {
          id: "q2",
          question: "How do you correctly state where you were born and where you currently live?",
          options: ["I was born in Dhaka and currently live in Chittagong", "I born at Dhaka and live Chittagong", "My birth is Dhaka", "I from Dhaka currently living"],
          correctIndex: 0,
          explanation: "'I was born in [City] and currently live in [City]' uses correct past passive and present simple."
        }
      ]
    },
    resources: [
      { id: "r3", title: "Self Introduction Templates & Worksheets.pdf", type: "pdf", size: "2.1 MB", url: "#" }
    ]
  },

  // 3. Spoken English Course Lesson 3 (Daily Conversation)
  {
    id: "vid-eng-03",
    title: "Lesson 3: Essential Daily English Conversations & Small Talk",
    description: "Break the ice effortlessly! Master real-life dialogues for shopping, ordering food at cafes, asking for directions, and making plans with friends.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    duration: "18:22",
    durationSeconds: 1102,
    views: 74100,
    uploadDate: "1 week ago",
    category: "English",
    level: "Beginner",
    channelId: "shofiul-english",
    channelName: "Shofiul English Academy",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 245000,
    likes: 5120,
    dislikes: 31,
    tags: ["Daily Conversation", "Small Talk", "Fluency", "English Dialogue"],
    courseId: "course-spoken-english-01",
    courseTitle: "Spoken English Beginner Course",
    courseLessonIndex: 3,
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "Small Talk Starters" },
      { timeSeconds: 300, timeFormatted: "5:00", title: "At a Restaurant & Cafe" },
      { timeSeconds: 650, timeFormatted: "10:50", title: "Asking for Directions" },
      { timeSeconds: 950, timeFormatted: "15:50", title: "Role-Play Practice" }
    ],
    resources: [
      { id: "r4", title: "50 Common Small Talk Dialogues.pdf", type: "pdf", size: "3.0 MB", url: "#" }
    ]
  },

  // 4. Grammar Lesson (Present Simple Tense)
  {
    id: "vid-gram-01",
    title: "Present Simple Tense Explained Clearly with 50+ Real Examples",
    description: "Master the most fundamental tense in English. Learn affirmative, negative, interrogative sentences, 3rd person singular 's/es' rules, and habitual actions.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80",
    duration: "16:40",
    durationSeconds: 1000,
    views: 112000,
    uploadDate: "2 weeks ago",
    category: "Grammar",
    level: "Beginner",
    channelId: "shofiul-english",
    channelName: "Shofiul English Academy",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 245000,
    likes: 8300,
    dislikes: 45,
    tags: ["Present Simple", "Grammar", "Tenses", "English Rules"],
    courseId: "course-spoken-english-01",
    courseTitle: "Spoken English Beginner Course",
    courseLessonIndex: 4,
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "What is Present Simple?" },
      { timeSeconds: 240, timeFormatted: "4:00", title: "Subject + Verb + Object Formula" },
      { timeSeconds: 520, timeFormatted: "8:40", title: "Third Person Singular (He/She/It + s/es)" },
      { timeSeconds: 800, timeFormatted: "13:20", title: "Negative & Question Form (Do/Does)" }
    ],
    quiz: {
      id: "quiz-gram-01",
      videoId: "vid-gram-01",
      title: "Present Simple Tense Mastery Quiz",
      description: "Test your command over 3rd person singular and negative forms.",
      passingScore: 80,
      questions: [
        {
          id: "gq1",
          question: "Choose the correct sentence for 'She' (habitual action):",
          options: ["She speaks three languages fluently", "She speak three languages fluently", "She is speak three languages", "She speaking three languages"],
          correctIndex: 0,
          explanation: "In Present Simple with 3rd person singular (He/She/It), the verb takes 's' or 'es'."
        },
        {
          id: "gq2",
          question: "How do you form the negative of 'He drives to school'?",
          options: ["He does not drive to school", "He do not drive to school", "He not drives to school", "He is not driving to school"],
          correctIndex: 0,
          explanation: "Use 'does not' + base verb (drive) for 3rd person singular negative."
        }
      ]
    },
    resources: [
      { id: "r5", title: "Present Simple Verb Practice Table.pdf", type: "pdf", size: "1.2 MB", url: "#" }
    ]
  },

  // 5. Mathematics: Calculus & Quadratic
  {
    id: "vid-math-01",
    title: "Calculus Visualized: What is a Derivative? (Geometric Intuition)",
    description: "Forget rote memorization! Discover what a derivative actually means in physics, engineering, and economics through tangent lines, instantaneous rates of change, and slope animations.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80",
    duration: "21:15",
    durationSeconds: 1275,
    views: 142000,
    uploadDate: "1 week ago",
    category: "Mathematics",
    level: "Intermediate",
    channelId: "dr-sarah-math",
    channelName: "Dr. Sarah Math Studio",
    channelAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 195000,
    likes: 9800,
    dislikes: 52,
    tags: ["Calculus", "Derivatives", "Math", "Limits", "Whiteboard"],
    courseId: "course-calculus-01",
    courseTitle: "Complete Calculus & Mathematical Analysis",
    courseLessonIndex: 1,
    isFeatured: true,
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "The Speedometer Paradox" },
      { timeSeconds: 320, timeFormatted: "5:20", title: "Secant Line to Tangent Line" },
      { timeSeconds: 700, timeFormatted: "11:40", title: "Formal Limit Definition of Derivative" },
      { timeSeconds: 1050, timeFormatted: "17:30", title: "Power Rule & Visual Proof" }
    ],
    quiz: {
      id: "quiz-math-01",
      videoId: "vid-math-01",
      title: "Calculus Foundations Quiz",
      description: "Evaluate your understanding of derivatives and tangent slopes.",
      passingScore: 70,
      questions: [
        {
          id: "mq1",
          question: "What is the derivative of f(x) = x³ with respect to x?",
          options: ["3x²", "x²", "3x", "x⁴ / 4"],
          correctIndex: 0,
          explanation: "Using the power rule d/dx(xⁿ) = n·xⁿ⁻¹, the derivative of x³ is 3x²."
        },
        {
          id: "mq2",
          question: "Geometrically, what does the derivative at a point x = a represent?",
          options: ["The slope of the tangent line to the curve at x = a", "The area under the curve", "The y-intercept of the function", "The maximum value of the function"],
          correctIndex: 0,
          explanation: "The derivative measures the instantaneous rate of change, which corresponds to the tangent line's slope."
        }
      ]
    },
    resources: [
      { id: "r6", title: "Calculus Derivative Formulas Sheet.pdf", type: "pdf", size: "2.4 MB", url: "#" }
    ]
  },

  // 6. Science: Newton's Laws of Motion
  {
    id: "vid-sci-01",
    title: "Newton's 3 Laws of Motion Explained with Real Experiments",
    description: "Explore inertia, F=ma, and action-reaction pairs with high-speed camera demonstrations, rocket propulsion, and friction simulations.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
    duration: "19:40",
    durationSeconds: 1180,
    views: 185000,
    uploadDate: "3 weeks ago",
    category: "Science",
    level: "Beginner",
    channelId: "khan-science",
    channelName: "Khan Science & Physics Hub",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 380000,
    likes: 12400,
    dislikes: 60,
    tags: ["Physics", "Newton Laws", "Mechanics", "Science", "Experiments"],
    courseId: "course-physics-01",
    courseTitle: "Classical Mechanics & General Physics",
    courseLessonIndex: 1,
    isFeatured: true,
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "1st Law: Law of Inertia" },
      { timeSeconds: 360, timeFormatted: "6:00", title: "2nd Law: Force = Mass × Acceleration" },
      { timeSeconds: 740, timeFormatted: "12:20", title: "3rd Law: Action & Reaction" },
      { timeSeconds: 1000, timeFormatted: "16:40", title: "Real Life Problem Solving" }
    ],
    quiz: {
      id: "quiz-sci-01",
      videoId: "vid-sci-01",
      title: "Newton's Laws Physics Quiz",
      description: "Test your comprehension of force, mass, inertia, and momentum.",
      passingScore: 75,
      questions: [
        {
          id: "sq1",
          question: "If a 5 kg object accelerates at 4 m/s², what is the net force acting on it?",
          options: ["20 N", "1.25 N", "9 N", "100 N"],
          correctIndex: 0,
          explanation: "Force = Mass × Acceleration = 5 kg × 4 m/s² = 20 Newtons."
        },
        {
          id: "sq2",
          question: "Why do passengers jerk forward when a fast-moving bus suddenly hits the brakes?",
          options: ["Due to inertia of motion", "Due to gravity increasing", "Due to air pressure", "Due to centrifugal magnetic force"],
          correctIndex: 0,
          explanation: "Inertia causes the passenger's body to resist the sudden change in motion."
        }
      ]
    },
    resources: [
      { id: "r7", title: "Mechanics Formula Sheet & Practice Problems.pdf", type: "pdf", size: "3.1 MB", url: "#" }
    ]
  },

  // 7. ICT & Coding
  {
    id: "vid-ict-01",
    title: "Web Development 101: How the Internet & HTML/CSS Really Work",
    description: "A complete visual introduction to web technologies, client-server architecture, domain name system (DNS), and writing your very first responsive website from scratch.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    duration: "24:30",
    durationSeconds: 1470,
    views: 96000,
    uploadDate: "4 days ago",
    category: "ICT",
    level: "Beginner",
    channelId: "techcraft-ict",
    channelName: "TechCraft ICT Academy",
    channelAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 160000,
    likes: 6700,
    dislikes: 38,
    tags: ["ICT", "Coding", "HTML", "CSS", "Web Development"],
    courseId: "course-ict-01",
    courseTitle: "Modern ICT & Full-Stack Fundamentals",
    courseLessonIndex: 1,
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "How Does the Internet Work?" },
      { timeSeconds: 380, timeFormatted: "6:20", title: "Browsers, HTTP, and Servers" },
      { timeSeconds: 820, timeFormatted: "13:40", title: "Building your first HTML file" },
      { timeSeconds: 1200, timeFormatted: "20:00", title: "Adding Styling with CSS" }
    ],
    resources: [
      { id: "r8", title: "HTML5 Tags & CSS Properties Reference.pdf", type: "pdf", size: "1.8 MB", url: "#" }
    ]
  },

  // 8. IELTS Masterclass
  {
    id: "vid-ielts-01",
    title: "IELTS Speaking Band 8+ Masterclass: Fluency & Idiomatic Language",
    description: "Learn how to speak naturally without long pauses, use cohesive linking devices, expand answers with examples, and master the Part 2 cue card method.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    duration: "22:15",
    durationSeconds: 1335,
    views: 128000,
    uploadDate: "1 week ago",
    category: "IELTS",
    level: "Advanced",
    channelId: "shofiul-english",
    channelName: "Shofiul English Academy",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 245000,
    likes: 8900,
    dislikes: 42,
    tags: ["IELTS", "Speaking", "Band 8", "English Exam", "Cue Card"],
    isFeatured: true,
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "IELTS Speaking Test Structure" },
      { timeSeconds: 320, timeFormatted: "5:20", title: "Part 1: Warm-up & Fluency" },
      { timeSeconds: 710, timeFormatted: "11:50", title: "Part 2: The 1-Minute Cue Card Strategy" },
      { timeSeconds: 1100, timeFormatted: "18:20", title: "Part 3: Abstract Discussion" }
    ],
    resources: [
      { id: "r9", title: "100 High-Band Idioms & Connectors for IELTS.pdf", type: "pdf", size: "2.8 MB", url: "#" }
    ]
  },

  // 9. General Knowledge
  {
    id: "vid-gk-01",
    title: "World Geography: Continents, Oceans & Strategic Waterways",
    description: "An animated journey across 7 continents, 5 oceans, key straits (Malacca, Hormuz, Gibraltar, Suez), and major mountain ranges.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80",
    duration: "17:50",
    durationSeconds: 1070,
    views: 79000,
    uploadDate: "2 weeks ago",
    category: "General Knowledge",
    level: "Beginner",
    channelId: "global-prep",
    channelName: "Global Knowledge & Exam Prep",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
    channelSubscribers: 120000,
    likes: 4300,
    dislikes: 29,
    tags: ["Geography", "General Knowledge", "World Map", "Competitive Exams"],
    chapters: [
      { timeSeconds: 0, timeFormatted: "0:00", title: "Introduction & 7 Continents" },
      { timeSeconds: 360, timeFormatted: "6:00", title: "Major Oceans & Currents" },
      { timeSeconds: 700, timeFormatted: "11:40", title: "Strategic Straits & Canals" }
    ],
    resources: [
      { id: "r10", title: "World Geography Quick Reference Map.pdf", type: "pdf", size: "3.5 MB", url: "#" }
    ]
  }
];

export const COURSES: Course[] = [
  {
    id: "course-spoken-english-01",
    title: "Spoken English Beginner Course",
    slug: "spoken-english-beginner-course",
    description: "A complete step-by-step master course designed to take absolute beginners to confident everyday English speakers. Crafted by Shofiul English Academy, covering 7 structured modules with practical dialogues, pronunciation drills, and interactive quizzes.",
    category: "English",
    level: "Beginner",
    instructorId: "shofiul-english",
    instructorName: "Prof. Shofiul Alam",
    instructorTitle: "Lead English Educator & Cambridge Certified Trainer",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
    totalLessons: 7,
    totalDuration: "2 hours 15 mins",
    enrolledStudents: 14200,
    rating: 4.9,
    reviewCount: 1280,
    certificateEligible: true,
    isFeatured: true,
    requirements: [
      "No prior English speaking fluency required",
      "Dedication to practice 15 minutes daily aloud",
      "Headphones or quiet room for listening drills"
    ],
    learningOutcomes: [
      "Greet colleagues and friends fluently with natural idioms",
      "Introduce yourself confidently in professional interviews and social events",
      "Order food, ask for directions, and hold daily small talk smoothly",
      "Master Present Simple tense and avoid common subject-verb errors",
      "Form questions naturally with What, Where, When, Why, How",
      "Build a core vocabulary of 500+ high-frequency active words",
      "Receive a verified Course Completion Certificate from Edu Tube"
    ],
    lessons: [
      { id: "les-1", videoId: "vid-eng-01", title: "1. Greetings & Formal/Casual Salutations", duration: "12:45", order: 1 },
      { id: "les-2", videoId: "vid-eng-02", title: "2. Self Introduction & Elevator Pitch", duration: "15:10", order: 2 },
      { id: "les-3", videoId: "vid-eng-03", title: "3. Daily Conversation & Small Talk Scenarios", duration: "18:22", order: 3 },
      { id: "les-4", videoId: "vid-gram-01", title: "4. Present Simple Tense & Daily Habits", duration: "16:40", order: 4 },
      { id: "les-5", videoId: "vid-eng-01", title: "5. Asking Questions with 'WH' Words", duration: "14:15", order: 5 },
      { id: "les-6", videoId: "vid-eng-02", title: "6. Essential Active Vocabulary for Everyday Life", duration: "19:05", order: 6 },
      { id: "les-7", videoId: "vid-ielts-01", title: "7. Speaking Practice & Fluency Immersion", duration: "22:15", order: 7 }
    ]
  },
  {
    id: "course-calculus-01",
    title: "Complete Calculus & Mathematical Analysis",
    slug: "complete-calculus-math",
    description: "From limits and derivatives to integrals, series, and real-world physical applications. Dr. Sarah guides you with crystal-clear visual geometric proofs and exam solving techniques.",
    category: "Mathematics",
    level: "Intermediate",
    instructorId: "dr-sarah-math",
    instructorName: "Dr. Sarah Mitchell",
    instructorTitle: "PhD in Mathematics, University Lecturer",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80",
    totalLessons: 6,
    totalDuration: "3 hours 10 mins",
    enrolledStudents: 8900,
    rating: 4.8,
    reviewCount: 740,
    certificateEligible: true,
    isFeatured: true,
    requirements: ["Basic high-school algebra and geometry concepts"],
    learningOutcomes: [
      "Understand the geometric intuition behind limits and continuity",
      "Calculate derivatives using product, quotient, and chain rules",
      "Solve optimization problems in business, physics, and engineering",
      "Master fundamental theorem of calculus and definite integrals"
    ],
    lessons: [
      { id: "les-m1", videoId: "vid-math-01", title: "1. Limits & Derivatives Geometric Intuition", duration: "21:15", order: 1 },
      { id: "les-m2", videoId: "vid-math-01", title: "2. The Chain Rule & Implicit Differentiation", duration: "24:30", order: 2 },
      { id: "les-m3", videoId: "vid-math-01", title: "3. Maximum, Minimum & Optimization Problems", duration: "28:10", order: 3 },
      { id: "les-m4", videoId: "vid-math-01", title: "4. Introduction to Integration & Area Under Curve", duration: "22:45", order: 4 },
      { id: "les-m5", videoId: "vid-math-01", title: "5. Fundamental Theorem of Calculus", duration: "26:20", order: 5 },
      { id: "les-m6", videoId: "vid-math-01", title: "6. Applications in Physics & Rate Equations", duration: "30:00", order: 6 }
    ]
  },
  {
    id: "course-physics-01",
    title: "Classical Mechanics & General Physics",
    slug: "classical-mechanics-physics",
    description: "Explore the laws governing our universe: kinematics, Newtonian mechanics, work, energy, momentum, gravity, and circular motion with Khan Science Hub.",
    category: "Science",
    level: "Beginner",
    instructorId: "khan-science",
    instructorName: "Engr. Salman Khan",
    instructorTitle: "Senior Physics Educator & Research Fellow",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
    totalLessons: 5,
    totalDuration: "2 hours 40 mins",
    enrolledStudents: 11400,
    rating: 4.9,
    reviewCount: 920,
    certificateEligible: true,
    requirements: ["Curiosity for how the physical world works"],
    learningOutcomes: [
      "Master Newton's three laws of motion and free body diagrams",
      "Calculate kinetic energy, potential energy, and power",
      "Understand conservation of linear momentum in collisions",
      "Apply physics principles to solve real-world engineering problems"
    ],
    lessons: [
      { id: "les-s1", videoId: "vid-sci-01", title: "1. Newton's 3 Laws & Inertia Experiments", duration: "19:40", order: 1 },
      { id: "les-s2", videoId: "vid-sci-01", title: "2. Work, Energy & Conservation of Energy", duration: "25:10", order: 2 },
      { id: "les-s3", videoId: "vid-sci-01", title: "3. Momentum & Elastic Collisions", duration: "21:30", order: 3 },
      { id: "les-s4", videoId: "vid-sci-01", title: "4. Universal Gravitation & Orbital Motion", duration: "27:00", order: 4 },
      { id: "les-s5", videoId: "vid-sci-01", title: "5. Rotational Mechanics & Torque", duration: "26:40", order: 5 }
    ]
  },
  {
    id: "course-ict-01",
    title: "Modern ICT & Full-Stack Fundamentals",
    slug: "modern-ict-coding-fundamentals",
    description: "Learn web technologies, computer hardware, network protocols, HTML, CSS, JavaScript, and database concepts in this practical ICT curriculum.",
    category: "ICT",
    level: "Beginner",
    instructorId: "techcraft-ict",
    instructorName: "Tanvir Rahman",
    instructorTitle: "Senior Software Engineer & Tech Instructor",
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    totalLessons: 6,
    totalDuration: "3 hours 20 mins",
    enrolledStudents: 9500,
    rating: 4.7,
    reviewCount: 680,
    certificateEligible: true,
    requirements: ["A computer with a web browser"],
    learningOutcomes: [
      "Understand internet architecture, DNS, and HTTP requests",
      "Write modern semantic HTML5 and responsive CSS",
      "Understand basic programming logic, variables, and loops in JavaScript",
      "Deploy your first static website online for free"
    ],
    lessons: [
      { id: "les-i1", videoId: "vid-ict-01", title: "1. How the Internet Works & HTML Basics", duration: "24:30", order: 1 },
      { id: "les-i2", videoId: "vid-ict-01", title: "2. CSS Styling, Flexbox & Responsive Layouts", duration: "28:15", order: 2 },
      { id: "les-i3", videoId: "vid-ict-01", title: "3. JavaScript Foundations: Variables & Functions", duration: "32:00", order: 3 },
      { id: "les-i4", videoId: "vid-ict-01", title: "4. DOM Manipulation & Interactive Web Pages", duration: "29:40", order: 4 },
      { id: "les-i5", videoId: "vid-ict-01", title: "5. Introduction to Databases & SQL", duration: "25:50", order: 5 },
      { id: "les-i6", videoId: "vid-ict-01", title: "6. Building and Publishing a Final Project", duration: "35:00", order: 6 }
    ]
  }
];

export const SHORTS: EducationalShort[] = [
  {
    id: "short-01",
    title: "Never say 'Very Tired'! Use these 4 Native English Words ⚡",
    description: "Expand your English vocabulary instantly with high-level alternatives.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=80",
    channelId: "shofiul-english",
    channelName: "Shofiul English Academy",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    views: 450000,
    likes: 38200,
    commentsCount: 940,
    tags: ["Vocabulary", "Spoken English", "Shorts", "IELTS"],
    keyTakeaway: "Say: Exhausted, Drained, Worn out, or Fatigued instead of repeating 'Very Tired'.",
    category: "English"
  },
  {
    id: "short-02",
    title: "Mind-Blowing Math Trick: Multiply any 2-digit number by 11 in 2 Seconds! 🤯",
    description: "Mental math speed secret that will save you time in exams.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&auto=format&fit=crop&q=80",
    channelId: "dr-sarah-math",
    channelName: "Dr. Sarah Math Studio",
    channelAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    views: 890000,
    likes: 72000,
    commentsCount: 1450,
    tags: ["Math Trick", "Mental Math", "Shorts", "Algebra"],
    keyTakeaway: "For 35 × 11: Add the digits (3+5=8) and place in middle = 385!",
    category: "Mathematics"
  },
  {
    id: "short-03",
    title: "Why does ice float on water? The Water Density Paradox 🧊🌊",
    description: "Why anomalous expansion of water is essential for aquatic life.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=80",
    channelId: "khan-science",
    channelName: "Khan Science Hub",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    views: 610000,
    likes: 54000,
    commentsCount: 820,
    tags: ["Physics", "Chemistry", "Science Fact", "Shorts"],
    keyTakeaway: "Water expands upon freezing due to hydrogen bonding, making ice less dense than liquid water.",
    category: "Science"
  },
  {
    id: "short-04",
    title: "What is an API in 45 Seconds? (Restaurant Waiter Analogy) 💻",
    description: "The cleanest analogy to understand Application Programming Interfaces.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80",
    channelId: "techcraft-ict",
    channelName: "TechCraft ICT Academy",
    channelAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    views: 380000,
    likes: 29000,
    commentsCount: 430,
    tags: ["Coding", "ICT", "API", "Web Dev"],
    keyTakeaway: "You are the customer, the kitchen is the system/database, and the API is the waiter delivering your order!",
    category: "ICT"
  }
];

export const INITIAL_USER: UserProfile = {
  id: "user-student-01",
  name: "Soyedul Mostafa",
  email: "soyedulmostafa115@gmail.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
  role: "student",
  bio: "Passionate lifelong student learning Spoken English, ICT, and Calculus. Aiming for IELTS Band 8.5!",
  streakDays: 14,
  totalHoursWatched: 18.5,
  savedVideoIds: ["vid-eng-01", "vid-math-01", "vid-sci-01"],
  likedVideoIds: ["vid-eng-01", "vid-eng-02", "vid-ict-01"],
  subscribedChannelIds: ["shofiul-english", "khan-science", "dr-sarah-math"],
  watchHistory: [
    { videoId: "vid-eng-01", watchedSeconds: 765, totalSeconds: 765, lastWatched: Date.now() - 3600000 },
    { videoId: "vid-eng-02", watchedSeconds: 910, totalSeconds: 910, lastWatched: Date.now() - 86400000 },
    { videoId: "vid-math-01", watchedSeconds: 650, totalSeconds: 1275, lastWatched: Date.now() - 172800000 }
  ],
  courseProgress: {
    "course-spoken-english-01": {
      completedLessonIds: ["les-1", "les-2"],
      progressPercentage: 29,
      isFinished: false
    }
  },
  quizSubmissions: [
    {
      id: "sub-1",
      quizId: "quiz-eng-01",
      quizTitle: "Lesson 1 Quiz: English Greetings & Etiquette",
      score: 4,
      totalQuestions: 4,
      percentage: 100,
      passed: true,
      timestamp: Date.now() - 86400000,
      selectedAnswers: [0, 0, 0, 0]
    }
  ],
  certificates: []
};

export const INITIAL_COMMENTS: Record<string, import("../types").VideoComment[]> = {
  "vid-eng-01": [
    {
      id: "c1",
      videoId: "vid-eng-01",
      authorId: "u2",
      authorName: "Maria Garcia",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      text: "This is the best explanation of formal vs casual greetings! Finally I understand why 'How do you do' shouldn't just be answered with 'Good' in Britain.",
      timestamp: "2 days ago",
      likes: 42,
      userLiked: false,
      replies: [
        {
          id: "c1-r1",
          videoId: "vid-eng-01",
          authorId: "shofiul-english",
          authorName: "Shofiul English Academy",
          authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
          authorRole: "teacher",
          text: "Thank you Maria! Keep practicing with the audio exercises in the Resources tab. You're doing wonderful!",
          timestamp: "1 day ago",
          likes: 18
        }
      ]
    },
    {
      id: "c2",
      videoId: "vid-eng-01",
      authorId: "u3",
      authorName: "David Chen",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      text: "The quiz at the end was super helpful for checking retention. Got 100% on my first try!",
      timestamp: "3 days ago",
      likes: 15
    }
  ]
};
