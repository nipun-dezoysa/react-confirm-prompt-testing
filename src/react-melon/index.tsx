import React from "react";
import ConfirmBox from "./ConfirmBox";
import ReactDOM from "react-dom";

export function showConfirm(){
    return new Promise((resolve, reject) => {
        const confirmBox = <ConfirmBox resolve={resolve} />;
        const root = document.getElementById("root");
        if (root) {
            const div = document.createElement("div");
            div.style.position = "fixed";
            div.style.top = "0";
            div.style.left = "0";
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.backgroundColor = "rgba(0,0,0,0.5)";
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            div.style.zIndex = "1000";
            root.appendChild(div);
            ReactDOM.render(confirmBox, div);
        }
    });
}