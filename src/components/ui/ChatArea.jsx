import * as React from "react";
import { cn } from "@/lib/utils";

const prompts = [
  "Write a job post for a remote project for UX design",
  "Generate an email to reply to a customer complaint",
  "Summarize this article in one paragraph",
  "How does a rocket's mass affect its acceleration and fuel capacity",
];

export function ChatArea() {
  return (
    <div className={cn("flex flex-1 flex-col overflow-hidden bg-white")}>
      {/* Greeting */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-semibold text-gray-800">Hi there, John</h1>
        <p className="text-gray-600 mt-1">What would you like to know?</p>
        <p className="text-sm text-gray-500 mt-2">
          Use one of the most common prompts below or use your own to begin:
        </p>
      </div>

      {/* Prompt Cards */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {prompts.map((text, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-gray-50"
          >
            <p className="text-sm text-gray-700">{text}</p>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="mt-auto border-t p-4">
        <form className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Ask whatever you want..."
            maxLength={2000}
          />
          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="text-sm text-purple-600 hover:underline"
            >
              Add Attachment
            </button>
            <button
              type="button"
              className="text-sm text-purple-600 hover:underline"
            >
              Use Image
            </button>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Go
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-1 text-right">0/2000</p>
      </div>
    </div>
  );
}

export default ChatArea;