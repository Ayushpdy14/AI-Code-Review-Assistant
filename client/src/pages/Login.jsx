import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    console.log("Login button clicked");
    try {
      const response = await fetch(
        "https://ai-code-review-backend-97xo.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>🤖 AI Code Review</h1>

<h2 className="auth-title">
  Welcome Back
</h2>

<p className="auth-subtitle">
  Sign in to continue reviewing your code with AI.
</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
  ✨ Login
</button>

        <div className="auth-links">
  <Link to="/forgot-password">
    Forgot Password?
  </Link>

  <p>
    Don't have an account?{" "}
    <Link to="/signup">Sign Up</Link>
  </p>
</div>
      </div>
    </div>
  );
}

export default Login;