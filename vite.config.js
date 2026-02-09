import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: 'goit-markup-final-test',
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      output: {
        // Це змусить Vite не додавати хеш до назв файлів
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});
