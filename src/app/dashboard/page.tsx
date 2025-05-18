"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState({
    name: "",
    message: "",
    userId: "",
  });

  const [feedback, setFeedback] = useState("");

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback("Sending...");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setFeedback("Something went wrong.");
        return;
      }

      setFeedback("Message sent.");
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
      <form
        onSubmit={submitForm}
        className="w-full max-w-md p-6 text-blue-950 border rounded shadow space-y-3"
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
          className="w-full py-2 bg-blue-950 text-white rounded hover:bg-gray-800 transition"
        >
          Submit
        </button>

        {feedback && (
          <p className="text-sm text-center text-gray-600">{feedback}</p>
        )}
      </form>
    </main>
  );
}
