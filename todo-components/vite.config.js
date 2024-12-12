import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "todo-components",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/components/List.tsx",
        "./Input": "./src/components/Input.tsx",
        "./DevCycleContext": "./src/components/DevCycleContext.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "@devcycle/react-client-sdk": { singleton: true },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
