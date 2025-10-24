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
    // Grayscale tones for neutral elements
    grayscale: {
      hue: 220,
      tint: 8,
      shade: theme === "dark" ? -5 : -4,
    },
    // Accent color for buttons, icons, highlights
    accent: {
      primary: theme === "dark" ? "#FFD700" : "#0f172a", // gold accent for dark mode
      level: 1,
    },
    // Explicit background colors
    background: {
      primary: theme === "dark" ? "#000000" : "#FFFFFF", // main chat background
      secondary: theme === "dark" ? "#111111" : "#F9FAFB", // panels, cards
    },
    // Text colors
    text: {
      primary: theme === "dark" ? "#FFFFFF" : "#0f172a", // main text
      secondary: theme === "dark" ? "#E5E5E5" : "#4B5563", // secondary text
    },
  },
  // Rounded corners
  radius: "xl",
});
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
