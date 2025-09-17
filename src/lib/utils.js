import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const STORAGE_KEY = 'chatllm-conversations';

export const chatUtils = {
  saveMessages: (messages) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      return true;
    } catch (error) {
      console.error('Error saving messages to localStorage:', error);
      return false;
    }
  },

  loadMessages: () => {
    try {
      const savedMessages = localStorage.getItem(STORAGE_KEY);
      return savedMessages ? JSON.parse(savedMessages) : [];
    } catch (error) {
      console.error('Error loading messages from localStorage:', error);
      return [];
    }
  },

  clearMessages: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing messages from localStorage:', error);
      return false;
    }
  },

  getStorageInfo: () => {
    try {
      const messages = localStorage.getItem(STORAGE_KEY);
      const size = messages ? new Blob([messages]).size : 0;
      const messageCount = messages ? JSON.parse(messages).length : 0;
      
      return {
        size: size,
        messageCount: messageCount,
        sizeInKB: Math.round(size / 1024 * 100) / 100
      };
    } catch (error) {
      console.error('Error getting storage info:', error);
      return { size: 0, messageCount: 0, sizeInKB: 0 };
    }
  },
};