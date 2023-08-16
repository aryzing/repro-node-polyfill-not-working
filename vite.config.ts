import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodePolyfills(), svelte()],
});
