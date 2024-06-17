import React from "react";
import ConfirmBox from "./ConfirmBox";
import ReactDOM from "react-dom";

export function showConfirm() {
  const root = document.getElementById("root");
  const div = document.createElement("div");
  div.id = randomName();
  div.style.position = "fixed";
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.zIndex = "1000";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  return new Promise((resolve, reject) => {
    if (root) {
      root.appendChild(div);
      ReactDOM.render(<ConfirmBox resolve={resolve} container={div.id} />, div);
    } else {
      reject("root not found");
    }
  });
}

function randomName() : string{
  return Math.random().toString(36).substring(7);
}
