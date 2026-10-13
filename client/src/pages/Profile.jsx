import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
  <div className="auth-container">
    <div className="auth-box">

      <h1>🤖 AI Code Review</h1>

      <h2 className="auth-title">
        My Profile
      </h2>

      <p className="auth-subtitle">
        Your account information
      </p>

      <div className="profile-avatar">
        👤
      </div>

      <div className="profile-info">

        <div className="profile-item">
          <span>Name</span>
          <h3>{user?.name}</h3>
        </div>

        <div className="profile-item">
          <span>Email</span>
          <h3>{user?.email}</h3>
        </div>

      </div>

      <button onClick={logout}>
        🚪 Logout
      </button>

    </div>
  </div>
);
}

export default Profile;