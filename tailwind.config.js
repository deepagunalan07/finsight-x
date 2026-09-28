/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F0F4FA", 100: "#DCE6F5", 200: "#B9CCEA", 300: "#8FA9D8",
          400: "#5B7DBE", 500: "#3A5CA0", 600: "#2C4680", 700: "#223763",
          800: "#182A4C", 900: "#0F1D38", 950: "#0A1428",
        },
        gold: {
          50: "#FBF7EA", 100: "#F5ECCB", 200: "#EBD795", 300: "#E0C05F",
          400: "#D4AC3B", 500: "#C9A227", 600: "#A98620", 700: "#866A1A",
          800: "#644F13", 900: "#43360D",
        },
      },
      fontFamily: { sans: ["Inter", ...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [],
};
