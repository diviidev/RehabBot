import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showSignUp, setShowSignUp] = useState(false); // To toggle the signup popup
  const [newUsername, setNewUsername] = useState(""); // For sign-up form
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  // Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/chatbot"), 1000);
      } else {
        setMessage(data.message || "User not found. Please sign up.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  // Sign-Up Handler
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Sign-up successful! Please log in.");
        setShowSignUp(false);
      } else {
        setMessage(data.message || "Sign-up failed. Try again.");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-800 to-black text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-teal-400 mb-6">
          RehabBot - Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-400 text-gray-900 font-bold rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Login
          </button>
        </form>
        <button
          className="mt-4 w-full py-2 bg-gray-700 text-gray-300 font-bold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => setShowSignUp(true)}
        >
          Sign Up
        </button>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("successful") ? "text-teal-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {/* Sign-Up Popup */}
      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-teal-400 mb-6">
              Sign Up
            </h2>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label
                  htmlFor="newUsername"
                  className="block text-sm font-medium mb-1"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="newUsername"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Enter a username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Enter a password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-teal-400 text-gray-900 font-bold rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Sign Up
              </button>
            </form>
            <button
              className="mt-4 w-full py-2 bg-gray-700 text-gray-300 font-bold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => setShowSignUp(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
