import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import ghPages from 'vite-plugin-gh-pages'

const repoName = 'build-your-portfolio-github-workflow-essentials-valentine54'
// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react(),
    tailwindcss(),
    // base: "/"
  ],
    
  
})
