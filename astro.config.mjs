import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://glittery-sprinkles-ab77a4.netlify.app',
  integrations: [tailwind(), sitemap()],
});
