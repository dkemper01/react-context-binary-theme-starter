import React from 'react';
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./ThemeProvider";
import './index.css';
import App from './App';

const container = document.getElementById("react");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
