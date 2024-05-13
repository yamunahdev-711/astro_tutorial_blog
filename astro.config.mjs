import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://app.netlify.com/sites/soft-banoffee-4c8ba3/overview",
  integrations: [preact()]
});