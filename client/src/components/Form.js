import React from "react";

export default function Form({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username"> Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password:</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{label}</button>
      </form>
    </div>
  );
}
