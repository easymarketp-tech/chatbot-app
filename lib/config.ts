// lib/config.ts
export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const GREETING = `KJC Store Assistant\nHow can I help you today?`;

export const STARTER_PROMPTS = [
  { label: "Track Order", prompt: "I want to track my order." },
  { label: "Report Issue", prompt: "I have a problem with my order or product." },
  { label: "Product Inquiry", prompt: "I want to ask about a product." },
];

export const PLACEHOLDER_INPUT = "Type your message...";

export const getThemeConfig = (theme: "light" | "dark") => {
  return theme === "light"
    ? {
        background: "#ffffff",
        foreground: "#000000",
      }
    : {
        background: "#0f172a",
        foreground: "#ffffff",
      };
};
