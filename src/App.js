import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [username, setUsername] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleMessageChange = (e) => setUserMessage(e.target.value);

  const sendMessage = async () => {
    if (!username || !userMessage) {
      alert("Please enter both username and message");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/addiction/chat",
        {
          username,
          user_message: userMessage,
        }
      );

      const { response: botResponse } = response.data;

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: userMessage },
        { role: "bot", content: botResponse },
      ]);

      setUserMessage("");
    } catch (err) {
      setError("Error fetching response from the server.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-2xl w-full bg-gray-900 shadow-2xl rounded-lg p-6 flex flex-col h-[95vh]">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Addiction Chatbot
        </h2>

        {/* Chat History */}
        <div className="flex-1 bg-gray-800 p-4 rounded-lg overflow-y-auto shadow-inner mb-6">
          {chatHistory.length > 0 ? (
            chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-lg max-w-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-purple-500 text-gray-200"
                  }`}
                >
                  <strong
                    className={`block mb-1 ${
                      msg.role === "user" ? "text-blue-200" : "text-purple-200"
                    }`}
                  >
                    {msg.role === "user" ? "You" : "Bot"}
                  </strong>
                  <p>{msg.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-sm">
              No chat history yet. Start a conversation!
            </p>
          )}
        </div>

        {/* Message Input Section */}
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
          {/* Username Input */}
          <div className="mb-3">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>

          {/* Message Input */}
          <div className="mb-3">
            <textarea
              value={userMessage}
              onChange={handleMessageChange}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
              placeholder="Enter your message"
            />
          </div>

          {/* Send Button */}
          <button
            onClick={sendMessage}
            className={`w-full py-3 rounded-md text-white font-semibold ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 transition"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Send Message"}
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-2 text-red-500 text-sm font-semibold text-center">
          {error}
        </p>
      )}
    </div>
  );
};

export default ChatBot;
