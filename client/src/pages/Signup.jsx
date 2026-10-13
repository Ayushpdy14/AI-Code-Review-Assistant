import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    console.log("Signup button clicked");
    try {
      const response = await fetch(
        "https://ai-code-review-backend-97xo.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <div className="auth-container">
    <div className="auth-box">

      <h1>🤖 AI Code Review</h1>

      <h2 className="auth-title">
        Create Account
      </h2>

      <p className="auth-subtitle">
        Join AI Code Review Assistant and start reviewing smarter.
      </p>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>
        ✨ Create Account
      </button>

      <div className="auth-links">
        <p>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>

    </div>
  </div>
);
}

export default Signup;