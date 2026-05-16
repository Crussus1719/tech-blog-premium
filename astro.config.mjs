import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://glittery-sprinkles-ab77a4.netlify.app/',
  integrations: [tailwind()],
});
