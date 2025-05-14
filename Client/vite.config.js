import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  preview: {
    allowedHosts: [
      "www.itin-tech.com",
      "itin-tech.com",
      "itin-frontend-2kr4.onrender.com",
    ],
  },
});
