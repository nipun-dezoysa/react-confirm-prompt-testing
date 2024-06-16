import React from "react";
import ConfirmBox from "./ConfirmBox";
import ReactDOM from "react-dom";

export function showConfirm() {
  const root = document.getElementById("root");
  const div = document.createElement("div");
  if (root) {
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.zIndex = "1000";
    root.appendChild(div);
  }

  return new Promise((resolve, reject) => {
    if (root) {
      const confirmBox = <ConfirmBox resolve={resolve} />;
      ReactDOM.render(confirmBox, div);
    } else {
      reject("root not found");
    }
  });
}
