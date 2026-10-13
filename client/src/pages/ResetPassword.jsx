import { useState } from "react";
import { useLocation } from "react-router-dom";
function ResetPassword() {
  const location = useLocation();

const [token, setToken] = useState(
  location.state?.token || ""
);
  const [password, setPassword] = useState("");

  async function handleResetPassword() {
    try {
      const response = await fetch(
        "https://ai-code-review-backend-97xo.onrender.com/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            password,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Reset Password</h1>

        <input
          type="text"
          placeholder="Reset Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;