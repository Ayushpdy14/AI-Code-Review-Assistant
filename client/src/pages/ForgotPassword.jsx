import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  async function handleForgotPassword() {
    try {
      const response = await fetch(
        "https://ai-code-review-backend-97xo.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        navigate("/reset-password", {
          state: {
            token: data.resetToken,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
  <div className="auth-container">
    <div className="auth-box">

      <h1>🤖 AI Code Review</h1>

      <h2 className="auth-title">
        Forgot Password
      </h2>

      <p className="auth-subtitle">
        Enter your registered email address and we'll help you reset your password.
      </p>

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleForgotPassword}>
        ✨ Send Reset Link
      </button>

      <div className="auth-links">
        <p>
          Remember your password?{" "}
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

export default ForgotPassword;