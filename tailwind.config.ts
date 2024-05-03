import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: 'hsl(14, 45%, 36%)', // nutmeg
          20: 'hsl(332, 51%, 32%)', // dark raspberry
          25: 'hsl(332, 51%, 32%, 0.1)' // dark raspberry
        },
        neutral: {
          10: 'hsl(330, 100%, 98%)', // rose white
          20: 'hsl(30, 54%, 90%)', // eggshell
          30: 'hsl(30, 18%, 87%)', // light grey
          40: 'hsl(30, 10%, 34%)', // wenge brown
          50: 'hsl(24, 5%, 18%)', // dark charcoal
        }
      }
    },
  },
  plugins: [],
};
export default config;
