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
    // Grayscale tones — set darkest shade for dark mode
    grayscale: {
      hue: 220,
      tint: 8,
      shade: theme === "dark" ? -4 : -2, // darkest allowed for dark mode
    },
    // Accent color for buttons, highlights, icons
    accent: {
      primary: theme === "dark" ? "#FFD700" : "#0f172a", // gold for dark, default for light
      level: 1,
    },
  },
  radius: "xl", // rounded corners
});
// Add other theme options here
// chatkit.studio/playground to explore config options
