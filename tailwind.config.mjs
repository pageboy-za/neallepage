/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      raisin_black: {
        DEFAULT: "#1e1e24",
        100: "#060607",
        200: "#0c0c0e",
        300: "#121216",
        400: "#18181d",
        500: "#1e1e24",
        600: "#474754",
        700: "#6f6f85",
        800: "#9e9eae",
        900: "#cfcfd7",
      },
      jet: {
        DEFAULT: "#444140",
        100: "#0e0d0d",
        200: "#1b1a1a",
        300: "#292727",
        400: "#373433",
        500: "#444140",
        600: "#6b6665",
        700: "#918c8a",
        800: "#b6b2b1",
        900: "#dad9d8",
      },
      baby_powder: {
        DEFAULT: "#f4f4f0",
        100: "#383829",
        200: "#6f6f52",
        300: "#a2a281",
        400: "#cbcbb9",
        500: "#f4f4f0",
        600: "#f6f6f3",
        700: "#f8f8f6",
        800: "#fbfbf9",
        900: "#fdfdfc",
      },
      grape: {
        DEFAULT: "#5e35c4",
        100: "#130b27",
        200: "#26154e",
        300: "#382076",
        400: "#4b2b9d",
        500: "#5e35c4",
        600: "#7d5cd2",
        700: "#9e84dd",
        800: "#beade9",
        900: "#dfd6f4",
      },
      mountbatten_pink: {
        DEFAULT: "#a188a6",
        100: "#211a22",
        200: "#423445",
        300: "#634e67",
        400: "#846889",
        500: "#a188a6",
        600: "#b3a0b7",
        700: "#c6b7c9",
        800: "#d9cfdb",
        900: "#ece7ed",
      },
    },

    extend: {},
  },
  plugins: [],
};
