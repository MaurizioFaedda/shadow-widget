import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const renderReactApp = (shadowHost) => {
  // Create a Shadow DOM attached to the provided host element
  const shadowRoot = shadowHost.attachShadow({ mode: "open" });

  // Create a container element (in this case, a <body>) inside the Shadow DOM
  const container = document.createElement("body");
  shadowRoot.appendChild(container);

  // Add a link to the CSS file for styling the React app inside the Shadow DOM
  const link = document.createElement("link");
  link.rel = "stylesheet"; // Specify that this is a stylesheet link
  link.href = "http://localhost:5173/dist/react-app.css"; // URL to the CSS file
  shadowRoot.appendChild(link);
  // Initialize the React root and render the App component in the container
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
};
