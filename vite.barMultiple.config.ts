// vite.barMultiple.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist/bar-multiple',
    rollupOptions: {
      input: resolve(__dirname, 'bar-multiple.html'),
      output: {
         entryFileNames: '[name].js'
      }
    }, 
  }
})