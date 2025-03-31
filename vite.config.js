import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/high-score_movies/', //깃허브 리포지토리와 같게끔
  plugins: [react()],
})
