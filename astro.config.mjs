// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio_simranjeet.github.io',
  base: '/simranjeet1999',
  vite: {
    plugins: [tailwindcss()],
  },
});
