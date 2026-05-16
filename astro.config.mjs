import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tech-blog-premium.netlify.app/',
  integrations: [tailwind()],
});
