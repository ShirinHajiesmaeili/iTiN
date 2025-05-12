import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // ✅ important for correct path resolution
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Expose the server to all network interfaces
    port: 8080, // Set a specific port for deployment (Render usually expects 8080)
  },
});
