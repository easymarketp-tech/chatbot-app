import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "How can I help you today?",
    prompt: "How can I help you today?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "KJCSTORE Customer Assistant";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 8,
      shade: theme === "dark" ? -5 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#FFD700" : "#0f172a",
      level: 1,
    },
    background: {
      primary: theme === "dark" ? "#000000" : "#FFFFFF",
      secondary: theme === "dark" ? "#111111" : "#F9FAFB",
    },
    text: {
      primary: theme === "dark" ? "#FFFFFF" : "#0f172a",
      secondary: theme === "dark" ? "#E5E5E5" : "#4B5563",
    },
  },
  radius: "xl",
});
// Add other theme options here
// chatkit.studio/playground to explore config options
