import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // Ensure App.js exists
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);