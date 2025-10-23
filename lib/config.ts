import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Track Order",
    prompt: "I want to track my order.",
    icon: "shopping-bag",
  },
  {
    label: "Report Issue",
    prompt: "I want to report an issue with my order or product.",
    icon: "circle-exclamation",
  },
  {
    label: "Product Inquiry",
    prompt: "I have a question about a product.",
    icon: "chat",
  },
];

export const PLACEHOLDER_INPUT = "Type your message here...";

export const GREETING = `KJC Store Assistant\nHow can I help you today?`;

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 8,
      shade: -5,
    },
    accent: {
      primary: "#FFD700", // Gold
      level: 1,
    },
    background: {
      primary: "#000000", // Black background
      secondary: "#111111",
    },
    text: {
      primary: "#FFFFFF", // White text
      secondary: "#E5E5E5",
    },
  },
  radius: "xl",
});
