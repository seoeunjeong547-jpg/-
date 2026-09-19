import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

const app = express();
app.use(express.json());
const PORT = 3000;

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

app.post("/api/generate-quiz", async (req, res) => {
  try {
    const { topic, difficulty, questionCount = 5 } = req.body;
    
    const prompt = `우리 몸의 순환기관(심장과 혈관, 혈액순환 등)에 관한 퀴즈를 총 ${questionCount}문제 생성해주세요.
주제: ${topic || '심장 구조와 혈액 순환 전반'}
난이도: ${difficulty || '중급'} (초급, 중급, 고급 중 선택)

반드시 아래의 JSON 구조에 맞는 유효한 JSON 형식으로만 응답해주세요.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              question: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ["id", "question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("AI 응답을 생성할 수 없습니다.");
    }
    const quizData = JSON.parse(text);
    res.json({ success: true, questions: quizData });
  } catch (error: any) {
    console.error("Quiz generation error:", error);
    res.status(500).json({ success: false, error: error.message || "퀴즈 생성 중 오류가 발생했습니다." });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
