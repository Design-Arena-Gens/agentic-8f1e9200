import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eefdf5",
          100: "#d5f8e5",
          200: "#abf1cd",
          300: "#77e4b1",
          400: "#42cf92",
          500: "#1fb87b",
          600: "#129863",
          700: "#0f7850",
          800: "#0e5f41",
          900: "#0c4f37"
        }
      }
    }
  },
  plugins: []
};

export default config;
