import { defineConfig } from "astro/config";
import icon from "astro-icon";
import astroI18next from "astro-i18next";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), astroI18next()],
  // output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
});