import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../App.css";
function Dashboard() {
const [code, setCode] = useState("");
const [review, setReview] = useState("");
const [issues, setIssues] = useState([]);
const [loading, setLoading] = useState(false);
const [history, setHistory] = useState([]);
const [complexity, setComplexity] = useState(null);
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("Newest");
const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));
  async function reviewCode() {
  try {
    setLoading(true);
    setReview("");
    setIssues([]);

    const response = await fetch("https://ai-code-review-backend-97xo.onrender.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
      }),
    });

    const data = await response.json();

    setReview(data.review);
    setComplexity(data.complexity);
    setIssues(data.issues);

const newReview = {
  id: Date.now(),
  date: new Date().toLocaleString(),
  code: code,
  review: data.review,
};

const updatedHistory = [newReview, ...history];

setHistory(updatedHistory);

localStorage.setItem(
  "reviewHistory",
  JSON.stringify(updatedHistory)
);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
function deleteReview(id) {
  const updatedHistory = history.filter((item) => item.id !== id);

  setHistory(updatedHistory);

  localStorage.setItem(
    "reviewHistory",
    JSON.stringify(updatedHistory)
  );
}
function handleFileUpload(event) {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    setCode(e.target.result);
  };

  reader.readAsText(file);
}
function handleLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/login");
}
useEffect(() => {
  const savedReviews = JSON.parse(localStorage.getItem("reviewHistory")) || [];
  setHistory(savedReviews);
}, []);
  return (
    <div className="container">
        <div className="top-bar">

  <div>
    <h1 style={{marginBottom:"5px"}}> AI Code Review Assistant</h1>

  </div>

  <div style={{display:"flex",gap:"15px"}}>

    <button
      onClick={() => window.location.href="/profile"}
    >
      👤 Profile
    </button>

    <button
      className="logout-btn"
      onClick={handleLogout}
    >
      Logout
    </button>

  </div>

</div>

     <h3
    style={{
    marginTop:"35px",
    marginBottom:"8px",
    color:"#f9a8d4",
    fontSize:"28px"
    }}
    >
      Welcome, {user?.name} 👋
    </h3>

      <p
    style={{
    marginBottom:"35px",
    fontSize:"18px",
    color:"#d1d5db"
    }}
>
Paste your JavaScript code below and let AI analyze it.
</p>
<h2
  style={{
    marginBottom: "20px",
    fontSize: "24px",
  }}
>
  💻 Code Editor
</h2>
<input
  type="file"
  accept=".js,.jsx,.ts,.tsx,.py,.java,.cpp,.c"
  onChange={handleFileUpload}
/>
      <textarea
        placeholder="Write or paste your JavaScript code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>

      <button onClick={reviewCode} disabled={loading}>
       {loading ? "Reviewing..." : "Review Code"}
      </button>
{loading && (
  <div className="loader"></div>
)}
      {issues.length > 0 && (
  <div className="review-box">
    <h2>📋 Static Analysis</h2>

    <ul>
      {issues.map((issue, index) => (
        <li key={index}>{issue}</li>
      ))}
    </ul>
  </div>
)}
<h2
style={{
marginTop:"40px",
marginBottom:"20px"
}}
>
📊 Metrics
</h2>
{complexity && (
  <div className="complexity-box">
    <h2>📊 Complexity Analysis</h2>

    <p><strong>📄 Lines of Code:</strong> {complexity.lines}</p>

    <p><strong>🔧 Functions:</strong> {complexity.functions}</p>

    <p><strong>🏛 Classes:</strong> {complexity.classes}</p>

    <p><strong>📝 Characters:</strong> {complexity.characters}</p>

    <p>
  <strong>⭐ Complexity Score:</strong>{" "}
  <span
    className={
      complexity.score === "Low"
        ? "low-score"
        : complexity.score === "Medium"
        ? "medium-score"
        : "high-score"
    }
  >
    {complexity.score}
  </span>
</p>
  </div>
)}
<h2
style={{
marginTop:"40px",
marginBottom:"20px"
}}
>
🤖 AI Analysis
</h2>
{review && (
  <div className="review-box">
    <h2>🤖 AI Review</h2>
    <ReactMarkdown>{review}</ReactMarkdown>
  </div>
)}
<input
  type="text"
  placeholder="Search previous reviews..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-box"
/>
<select
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  className="filter-dropdown"
>
  <option value="Newest">Newest First</option>
  <option value="Oldest">Oldest First</option>
</select>
<h2
  style={{
    marginTop: "55px",
    marginBottom: "20px",
  }}
>
  📚 Review History
</h2>

{history.length === 0 ? (
  <p>No previous reviews yet.</p>
) : (
  history
  .filter((item) => {
    const text = search.toLowerCase();

    return (
      item.code.toLowerCase().includes(text) ||
      item.review.toLowerCase().includes(text)
    );
  })
  .sort((a, b) => {
    if (filter === "Newest") {
      return b.id - a.id;
    }

    return a.id - b.id;
  })
  .map((item) => (
    <div key={item.id} className="history-card">
      <h3>{item.date}</h3>

      <button
  onClick={() => {
    setReview(item.review);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  View Review
</button>
<button onClick={() => deleteReview(item.id)}>
  Delete
</button>
    </div>
  ))
)}

    </div>
  );
}

export default Dashboard;