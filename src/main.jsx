import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const renderReactApp = () => {
  // Get the body of the document
  const body = document.body;

  // Create a new div to serve as the host for the Shadow DOM
  const divShadow = document.createElement("div");
  body.appendChild(divShadow); // Append the new div to the body

  // Create the Shadow DOM attached to the new div
  const shadowRoot = divShadow.attachShadow({ mode: "open" });

  // Create a container inside the Shadow DOM for the React app
  const container = document.createElement("body");
  shadowRoot.appendChild(container); // Append the container to the Shadow DOM

  // Add a link to the CSS file for styling the React app
  const link = document.createElement("link");
  link.rel = "stylesheet"; // Specify that this is a stylesheet link
  link.href = "https://mauriziofaedda.github.io/shadow-widget/dist/react-app.css"; // URL to the CSS file
  shadowRoot.appendChild(link); // Append the stylesheet to the Shadow DOM

  // Initialize the React root and render the App component inside the container
  const root = ReactDOM.createRoot(container);
  root.render(<App />);

  console.log("React app rendered inside a Shadow DOM!");
};
