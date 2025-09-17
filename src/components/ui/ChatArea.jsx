import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, Image as ImageIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

const prompts = [
  "Write a job post for UX design",
  "Reply to customer complaint", 
  "Summarize this article",
  "Explain rocket acceleration",
];

const responses = [
  "I'd be happy to help! Here's a comprehensive response...",
  "Great question! Let me break this down...",
  "Here's what you need to know...",
  "I can assist with that. Here's the explanation...",
];

export function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('chatllm-conversations');
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatllm-conversations', JSON.stringify(messages));
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date().toISOString(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('chatllm-conversations');
  };

  return (
    <div className={cn("flex flex-1 flex-col overflow-hidden bg-white")}>
      {messages.length === 0 ? (
        <>
          {/* Welcome Screen */}
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
              <button
                key={index}
                onClick={() => setInputValue(text)}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-gray-50 text-left"
              >
                <p className="text-sm text-gray-700">{text}</p>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <button
              onClick={clearChat}
              className="text-xs text-gray-500 hover:text-gray-700 underline ml-auto block"
            >
              Clear Chat
            </button>
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex", message.sender === 'user' ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[70%] p-3 rounded-lg",
                    message.sender === 'user' ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800"
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </>
      )}

      {/* Input Section - Fixed at bottom */}
      <div className="mt-auto border-t p-4 bg-white">
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full border rounded-lg p-3 pr-16 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[44px] max-h-32"
              placeholder="Ask whatever you want..."
              maxLength={2000}
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <div className="absolute right-3 top-3 flex gap-1">
              <Paperclip className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
              <ImageIcon className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-1 text-right">{inputValue.length}/2000</p>
      </div>
    </div>
  );
}

export default ChatArea;