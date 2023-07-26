import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wordToVuePlugin from 'vite-plugin-vue-word2vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    wordToVuePlugin({
      className: {
        'doc-wrapper': true
      }
    }),
  ],
})
