import * as React from "react";
import { cn } from "@/lib/utils";

// This component renders the chat layout with a greeting and a textarea input
export function ChatArea() {
  return (
    <div className={cn("flex flex-1 flex-col overflow-hidden")}>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {/* Chat messages will go here */}
          <div className="text-center text-gray-500">
            Hi there! What's on your mind?
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <form className="flex space-x-5">
          <textarea
            className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatArea;