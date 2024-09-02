import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://eze-israel.github.io/BooksLB/",
  plugins: [react()],
})
