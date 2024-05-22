import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'tpred': {
          '50': '#fef3f2',
          '100': '#fde4e3',
          '200': '#fccecc',
          '300': '#f9aca8',
          '400': '#f37c76',
          '500': '#e84840',
          '600': '#d6342c',
          '700': '#b42821',
          '800': '#95251f',
          '900': '#7c2420',
          '950': '#430f0c',
      }
      }
    },
  },
  plugins: [],
};
export default config;
