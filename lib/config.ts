import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Track Order", "Report Issue", "Product Inquiry",
    prompt: "Track Order", "Report Issue", "Product Inquiry",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "KJCSTORE Customer Assitant. How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 8,
      shade: -5,
    },
    accent: {
      primary: "#FFD700",
      level: 1,
    },
    background: {
      primary: "#000000",
      secondary: "#111111",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E5E5E5",
    },
  },
  radius: "xl",
});
