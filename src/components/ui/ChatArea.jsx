import * as React from "react";
import { cn } from "@/lib/utils";

export function ChatArea() {
  return (
    <div className={cn("flex flex-1 flex-col overflow-hidden")}>
      {/* Chat messages section */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="text-center text-violet-500 text-lg font-medium text-wrap">
            <h1 class="text-indent: -8px">Hi there!</h1><h1> What's on your mind?</h1>
          </div>
        </div>
      </div>

      {/* Input section */}
      <div className="border-t p-4">
        <form className="flex space-x-4">
          <textarea
            className="flex-1 border rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            rows={3}
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