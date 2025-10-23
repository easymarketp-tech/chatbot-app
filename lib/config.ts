import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// Your workflow ID from environment variables
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

// Backend endpoint to create session
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Starter prompts shown to user when chat loads
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Track Order",
    prompt: "I want to track my order.",
    icon: "circle-question",
  },
  {
    label: "Report Issue",
    prompt: "I want to report an issue with my order or product.",
    icon: "warning",
  },
  {
    label: "Product Inquiry",
    prompt: "I have a question about a product.",
    icon: "chat",
  },
];

// Placeholder text in input box
export const PLACEHOLDER_INPUT = "Type your message here...";

// Greeting message displayed at top of chat
export const GREETING = `KJC Store Assistant\nHow can I help you today?`;

// Theme configuration – dark mode with gold accents and white text
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 8,
      shade: -5,
    },
    accent: {
      // Gold accent color for highlights and buttons
      primary: "#FFD700",
      level: 1,
    },
    background: {
      // Dark background
      primary: "#000000",
      secondary: "#111111",
    },
    text: {
      // White text color for messages and placeholders
      primary: "#FFFFFF",
      secondary: "#E5E5E5",
    },
  },
  radius: "xl",
});
