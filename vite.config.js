import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Export the Vite configuration
export default defineConfig({
  // Register plugins
  plugins: [react()], // Adds React plugin for handling JSX and other React-specific features

  // Define global constants
  define: {
    "process.env": {}, // Replace `process.env` references to avoid runtime errors
  },

  // Configuration for the build process
  build: {
    lib: {
      entry: "./src/main.jsx", //* IMPORANT -> Entry point for the library build
      name: "ReactApp", // Global variable name for the UMD module
      fileName: "react-app", // Output filename for the generated library
      formats: ["umd"], // Export format (UMD allows usage in various environments)
    },
  },
});
