import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  preview: {
    allowedHosts: [
      "www.itin-tech.com",
      "itin-tech.com",
      "itin-frontend-2kr4.onrender.com", // ✅ ADD THIS
    ],
  },
});
