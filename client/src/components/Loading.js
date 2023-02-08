import React from "react";
import "../styles/styles.css";

export default function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <span>Connecting to server ...</span>
      {/* <img src='icon.webp' alt="" /> */}
    </div>
  );
}
