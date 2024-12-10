import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export function renderReactApp(shadowHost) {
  const shadowRoot = shadowHost.attachShadow({ mode: "open" });

  const container = document.createElement("div");
  shadowRoot.appendChild(container);

  console.log("i'm shadow render!");

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
