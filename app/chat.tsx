"use client";
import { useChat } from "ai/react";

export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md m-auto w-full">
      <ul className="space-y-2">
        {messages.map((m, index) => (
          <li key={index} className="p-2 rounded bg-white shadow text-gray-700">
            <span className="font-semibold">
              {m.role === "user" ? "User: " : "AI Assistant: "}
            </span>
            {m.content}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Write here ...
          <input
            value={input}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 rounded border shadow-sm"
          />
        </label>
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
