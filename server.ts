import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini AI
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "Edu Tube", timestamp: new Date().toISOString() });
});

// AI Smart Tutor for video lessons
app.post("/api/ai/ask-tutor", async (req, res) => {
  try {
    const { question, videoTitle, videoContext, courseTitle, timestamp } = req.body;
    const ai = getAIClient();
    
    if (!ai) {
      // Fallback simulated intelligent response if no API key is provided
      return res.json({
        answer: `Great question about "${videoTitle}"! ${question ? `Regarding "${question}": ` : ""}In educational practice, mastering this concept involves understanding the core principles, applying practical examples, and testing yourself with the lesson quiz. (Note: Add your GEMINI_API_KEY in Secrets for live AI-generated tutoring).`,
        keyPoints: [
          "Focus on foundational grammar and core concepts first",
          "Practice active recall by taking the video quiz",
          "Review the timestamped chapters for step-by-step revision"
        ]
      });
    }

    const prompt = `You are an expert, encouraging, and clear AI Educational Tutor on the Edu Tube learning platform.
Student is currently watching the lesson: "${videoTitle || 'Educational Lesson'}" ${courseTitle ? `from the course "${courseTitle}"` : ''} at timestamp ${timestamp || '0:00'}.
Context / Transcript summary: ${videoContext || 'Educational lesson content'}.

Student's Question: "${question}"

Provide a friendly, highly structured, and easy-to-understand explanation suitable for a student. Break down any complex jargon, give a clear example, and provide 2-3 quick revision bullet points.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
    });

    res.json({
      answer: response.text || "Here is the explanation to help your learning journey.",
    });
  } catch (error: any) {
    console.error("AI Tutor Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate AI tutor response" });
  }
});

// AI Lesson Summary
app.post("/api/ai/summarize-lesson", async (req, res) => {
  try {
    const { videoTitle, description, transcript, category } = req.body;
    const ai = getAIClient();

    if (!ai) {
      return res.json({
        summary: `This lesson covers key fundamentals of ${category || 'the subject'}, focusing on practical real-world applications and step-by-step mastery.`,
        takeaways: [
          "Core definitions and fundamental concepts explained clearly",
          "Practical examples and common pitfalls to avoid",
          "Next steps for practice and self-testing via quiz"
        ]
      });
    }

    const prompt = `You are an academic curriculum synthesizer for Edu Tube.
Summarize the following educational lesson:
Title: ${videoTitle}
Category: ${category}
Description/Transcript: ${description || transcript || 'Comprehensive educational lesson'}

Provide:
1. A concise 2-sentence executive summary.
2. 3-4 bulleted Key Takeaways / Study Notes.
3. One challenging self-reflection question.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
    });

    res.json({
      summaryText: response.text,
    });
  } catch (error: any) {
    console.error("AI Summary Error:", error);
    res.status(500).json({ error: error.message || "Failed to summarize lesson" });
  }
});

// AI Auto Quiz Generator
app.post("/api/ai/generate-quiz", async (req, res) => {
  try {
    const { topic, difficulty, videoTitle } = req.body;
    const ai = getAIClient();

    if (!ai) {
      return res.json({
        questions: [
          {
            id: "gen-1",
            question: `What is the primary concept taught in "${videoTitle || topic || 'this lesson'}"?`,
            options: [
              "Core theoretical foundations and systematic application",
              "Unrelated historical trivia",
              "Random memorization without practical context",
              "None of the above"
            ],
            correctIndex: 0,
            explanation: "Educational lessons focus on structured theoretical foundations and practical application."
          },
          {
            id: "gen-2",
            question: "Why is active practice and quiz self-assessment essential in mastery?",
            options: [
              "It enhances memory retention through active recall",
              "It takes less time than reading",
              "It replaces the need for conceptual understanding",
              "It is only useful for final exams"
            ],
            correctIndex: 0,
            explanation: "Active recall and spaced repetition dramatically improve long-term retention."
          }
        ]
      });
    }

    const prompt = `Create a 3-question multiple choice educational quiz based on:
Topic/Lesson: ${videoTitle || topic || 'Educational Lesson'}
Difficulty Level: ${difficulty || 'Beginner'}

Return pure JSON matching this exact structure:
[
  {
    "id": "q1",
    "question": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Clear explanation why this is correct."
  }
]`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const parsed = JSON.parse(response.text || "[]");
    res.json({ questions: parsed });
  } catch (error: any) {
    console.error("AI Quiz Generator Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate quiz" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Edu Tube Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
