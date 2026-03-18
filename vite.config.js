import { defineConfig } from 'vite';
import fs from 'node:fs';

// Read the package.json to extract the version dynamically
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

export default defineConfig({
  define: {
    // Expose the version globally to the frontend
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
});
