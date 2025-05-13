import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // Make sure the output directory is correctly set
    assetsDir: "assets", // Optional: customize the assets folder
    // You can also configure other build options here if needed
  },
  preview: {
    allowedHosts: ["www.itin-tech.com"], // For local preview, but not critical for production
  },
});
