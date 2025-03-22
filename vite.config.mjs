import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "richmd.react",
      fileName: (format) => `index.${format}.jsx`,
    },
    rollupOptions: {
      external: [
        "react",
        "html-react-parser",
        "@richmd/core",
      ],
      output: {
        globals: {
          react: "React",
          "html-react-parser": "parse",
          "@richmd/core": "core",
        },
      },
    },
  },
})
