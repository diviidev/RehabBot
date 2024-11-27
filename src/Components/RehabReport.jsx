import React, { useState } from "react";
import axios from "axios";

const RehabReport = () => {
  const [username, setUsername] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [addictions, setAddictions] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateReport = async () => {
    if (!username) {
      alert("Please enter a username.");
      return;
    }

    setLoading(true);
    setError("");
    setReport(null);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/addiction/rehab_program/${username}?medical_conditions=${medicalConditions}&addictions=${addictions}`
      );
      setReport(response.data.rehab_program);
    } catch (err) {
      setError("Failed to generate the report. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-8">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
        Rehab Report Generator
      </h2>
      <div className="max-w-md w-full bg-gray-900 p-6 rounded-lg shadow-lg">
        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
          />
        </div>

        {/* Medical Conditions Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Medical Conditions
          </label>
          <input
            type="text"
            value={medicalConditions}
            onChange={(e) => setMedicalConditions(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter medical conditions (optional)"
          />
        </div>

        {/* Addictions Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Addictions</label>
          <input
            type="text"
            value={addictions}
            onChange={(e) => setAddictions(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter addictions (optional)"
          />
        </div>

        {/* Generate Report Button */}
        <button
          onClick={handleGenerateReport}
          className={`w-full py-3 rounded-md text-white font-semibold ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 transition"
          }`}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Report"}
        </button>

        {error && (
          <p className="mt-4 text-red-500 text-sm font-semibold text-center">
            {error}
          </p>
        )}
      </div>

      {/* Report Output */}
      {report && (
        <div className="max-w-4xl w-full mt-8 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            Rehab Report
          </h3>
          <pre className="text-gray-300 whitespace-pre-wrap">{report}</pre>
        </div>
      )}
    </div>
  );
};

export default RehabReport;
