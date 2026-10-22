import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'node:path';
import meta from './meta.json';

function htmlMetaPlugin() {
  return {
    name: 'html-meta',
    transformIndexHtml(html: string) {
      const replacements: Record<string, string> = {
        '%META_TITLE%': meta.title,
        '%META_DESCRIPTION%': meta.description,
        '%META_URL%': meta.url,
        '%META_SITE_NAME%': meta.siteName,
        '%META_OG_IMAGE%': meta.ogImage,
        '%META_TWITTER_CARD%': meta.twitterCard,
      };
      return Object.entries(replacements).reduce(
        (acc, [key, val]) => acc.replaceAll(key, val),
        html,
      );
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), svgr(), htmlMetaPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
  },
});
