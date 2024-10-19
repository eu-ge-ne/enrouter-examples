import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import enrouter from "enrouter/vite/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), enrouter({ path: "src/app" })],
  optimizeDeps: {
    exclude: ["virtual:enrouter"],
  },
});
