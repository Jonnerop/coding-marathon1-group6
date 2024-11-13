import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/coding-marathon1-group6/",
  plugins: [react()],
  server: {
    open: true,
  }
})
