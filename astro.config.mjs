// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// The root of jackhric.github.io. Each project (r3cui, decky-toolkit, ...) deploys its own site under /<repo>/
// from its own repository; this site only owns "/" and the sitemap index in public/sitemap.xml.
export default defineConfig({
  site: "https://jackhric.github.io",
  trailingSlash: "ignore",
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
