# 🤖 AI Code Review Assistant

An AI-powered web application that helps developers improve their code by providing intelligent code reviews, static analysis, and complexity metrics. The application allows users to upload or paste source code, receive AI-generated suggestions, and keep a history of previous reviews in a clean and user-friendly interface.

## 🌐 Live Demo

**Frontend:** https://ai-code-review-assistant-roan-pi.vercel.app

**Backend API:** https://ai-code-review-backend-97xo.onrender.com

---

## 📖 Project Overview

Writing clean and efficient code is an important part of software development, but manually reviewing code can be time-consuming. This project simplifies the process by combining Google's Gemini AI with static code analysis to provide instant feedback on submitted code.

The application also includes secure user authentication, review history, complexity analysis, and an attractive dashboard to enhance the user experience.

---

## ✨ Features

- 🔐 Secure User Authentication (Signup & Login)
- 🔑 Forgot Password & Reset Password
- 🤖 AI-powered Code Review using Google Gemini AI
- 📋 Static Code Analysis
- 📊 Complexity Analysis
- 📂 Upload Code Files
- ✍️ Paste Code Directly into the Editor
- 📚 Review History
- 🔍 Search Previous Reviews
- 📅 Sort Reviews (Newest / Oldest)
- 👤 User Profile Page
- 🚪 Secure Logout
- 🎨 Modern Responsive User Interface

---

## 💻 Supported Languages

The application accepts code files in the following languages:

- JavaScript
- React (.jsx)
- TypeScript
- Python
- Java
- C
- C++

> **Note:** AI review is available for all supported languages, while the built-in static analysis and complexity calculations are currently optimized for JavaScript.

---

# 🛠️ Technology Stack

## Frontend

- React.js
- React Router DOM
- React Markdown
- CSS3

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## AI Model

- Google Gemini AI

## Authentication

- JWT (JSON Web Token)

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
AI-Code-Review-Assistant
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
├── server
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── analyzer.js
│   ├── index.js
│   └── ...
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/23103190/ai-code-review-assistant.git
```

## 2. Open the Project

```bash
cd ai-code-review-assistant
```

## 3. Install Frontend Dependencies

```bash
cd client
npm install
```

## 4. Install Backend Dependencies

```bash
cd ../server
npm install
```

## 5. Configure Environment Variables

Create a `.env` file inside the **server** folder.

Example:

```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
JWT_SECRET=YOUR_SECRET_KEY
```

---

# ▶️ Run the Project

## Backend

```bash
cd server
npm run dev
```

## Frontend

```bash
cd client
npm run dev
```

---

# 🚀 Application Workflow

1. User creates an account or logs in.
2. User pastes code or uploads a source code file.
3. Backend performs static analysis.
4. Complexity metrics are calculated.
5. Code is sent to Google Gemini AI.
6. AI generates suggestions and improvements.
7. Review is displayed on the dashboard.
8. Review history is stored locally for future reference.

---

# 📊 Complexity Metrics

The application calculates:

- Number of Lines
- Number of Functions
- Number of Classes
- Character Count
- Overall Complexity Score

---

# 💾 Data Storage

### MongoDB

Used to store:

- User Name
- Email
- Password (Encrypted)

### Local Storage

Used to store:

- Review History
- Previous AI Responses

---

# 🔐 Security Features

- Password Encryption
- JWT Authentication
- Protected Routes
- Environment Variables for API Keys
- Secure Login & Logout

---

# 📸 Screenshots

## Login Page
![Login Page](screenshots/login.png)

## Signup Page
![Signup Page](screenshots/signup.png)

## Dashboard
![Dashboard](screenshots/dashboard1.png)

## AI Code Review
![AI Review](screenshots/ai-analysis.png)

## Complexity Analysis
![Complexity Analysis](screenshots/dashboard2.png)

## Profile Page
![Profile Page](screenshots/profile.png)

## search-and-review
![Review history](screenshots/search-and-review-history.png)

---

# 🔮 Future Enhancements

- Support static analysis for multiple programming languages
- Download AI review as PDF
- Dark/Light Theme
- Team Collaboration
- Cloud-based Review History
- Code Quality Score Visualization
- Syntax Highlighting
- Email Verification

---

# 👨‍💻 Author

**Ojaswi**

B.Tech Computer Science Engineering

---

# 📄 License

This project was developed for academic and educational purposes.