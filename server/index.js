const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
const analyzeCode = require("./analyzer");
const connectDB = require("./config/db");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("AI Code Review Backend is Running 🚀");
});
const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

// Review Route
app.post("/review", async (req, res) => {
  try {
    const { code } = req.body;
    const analysis = analyzeCode(code);

const issues = analysis.issues;
const complexity = analysis.complexity;

    const prompt = `
You are an expert JavaScript code reviewer.

Review the following JavaScript code.
Explain mistakes, suggest improvements, and provide a better version if needed.

Code:
${code}
`;

    const result = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    res.json({
  review: result.text,
  issues,
  complexity,
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong.",
    });
  }
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});