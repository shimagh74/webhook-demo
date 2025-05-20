"use client";

import { useState } from "react";

interface ProcessedData {
  name: string;
  message: string;
  userId: string;
  time: string;
}

export default function DashboardPage() {
  const [data, setData] = useState({
    name: "",
    message: "",
    userId: "",
  });

  const [feedback, setFeedback] = useState("");
  const [processedData, setProcessedData] = useState<ProcessedData | null>(null);

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback("Processing...");
    setProcessedData(null);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setFeedback("Something went wrong.");
        return;
      }

      setFeedback("Data processed successfully!");
      setProcessedData(result.data);
      setData({
        name: "",
        message: "",
        userId: "",
      });
    } catch {
      setFeedback("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        <form
          onSubmit={submitForm}
          className="p-6 text-blue-950 border rounded shadow space-y-3"
        >
          <h1 className="text-xl font-semibold text-center">Send Info</h1>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={updateField}
            className="w-full p-2 border rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={data.message}
            onChange={updateField}
            className="w-full p-2 border rounded"
            required
          />

          <input
            name="userId"
            type="text"
            placeholder="User ID"
            value={data.userId}
            onChange={updateField}
            className="w-full p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-900 cursor-pointer text-white rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>

          {feedback && (
            <p className="text-sm text-center text-gray-600">{feedback}</p>
          )}
        </form>

        {processedData && (
          <div className="p-6 border rounded shadow space-y-2">
            <h2 className="text-lg font-semibold text-blue-950">
              Processed Result
            </h2>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-medium">Processed Name :</span>{" "}
                {processedData.name}
              </p>
              <p>
                <span className="font-medium">Message :</span>{" "}
                {processedData.message} 
              </p>
              <p>
                <span className="font-medium">User ID :</span>{" "}
                {processedData.userId}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {processedData.time}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
