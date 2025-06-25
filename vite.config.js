import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, "../Security_Backend-main/certificate/localhost.key")
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, "../Security_Backend-main/certificate/localhost.crt")
      ),
    },
    port: 5173,
  },
});