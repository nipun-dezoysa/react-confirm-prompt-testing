import React, { useState, useEffect } from "react";
import "./ConfirmBox.css";
import { TiInfoOutline, TiWarningOutline } from "react-icons/ti";
import { GrStatusGood, GrCircleQuestion } from "react-icons/gr";
import { options } from "./varTypes";

function ConfirmBox(props: {
  resolve: (value: boolean) => void;
  container: string;
  title: string;
  options: options;
}) {
  const { resolve, container, title, options } = props;
  const [icon, setIcon] = useState(<TiInfoOutline />);
  const [iconColor, setIconColor] = useState("rgb(96 165 250)");

  useEffect(() => {
    if (options.type) {
      switch (options.type) {
        case "question":
          setIcon(<GrCircleQuestion />);
          setIconColor("rgb(34 211 238)");
          break;
        case "warning":
          setIcon(<TiWarningOutline />);
          setIconColor("#f00");
          break;
        case "success":
          setIcon(<GrStatusGood />);
          setIconColor("rgb(74 222 128)");
          break;
        default:
          setIcon(<TiInfoOutline />);
          setIconColor("rgb(96 165 250)");
          break;
      }
    }
    if (options.color) {
      setIconColor(options.color);
    }
  }, []);

  function confirm(answer: boolean) {
    const div = document.getElementById(container);
    if (div) {
      div.remove();
    }
    resolve(answer);
  }

  const handleMouseOver = (e: any) => {
    e.target.style.backgroundColor = options.hoverColor
      ? options.hoverColor
      : "rgb(28 25 23)";
    e.target.style.color = options.hoverTextColor
      ? options.hoverTextColor
      : "white";
  };

  const handleConfirmOut = (e: any) => {
    e.target.style.backgroundColor = options.confirmColor
      ? options.confirmColor
      : iconColor;
    e.target.style.color = options.confirmTextColor
      ? options.confirmTextColor
      : "white";
  };

  const handleCancelOut = (e: any) => {
    e.target.style.backgroundColor = options.cancelColor
      ? options.cancelColor
      : "rgb(229 231 235)";
    e.target.style.color = options.cancelTextColor
      ? options.cancelTextColor
      : "black";
  };

  return (
    <>
      <div onClick={() => confirm(false)} className="backGround" />
      <div className="box">
        <div
          className="icon"
          style={{
            backgroundColor: options.iconColor ? options.iconColor : iconColor,
          }}
        >
          {options.icon ? options.icon : icon}
        </div>
        <div className="title">{title}</div>
        <div className="description">
          {options.description ? options.description : ""}
        </div>
        <button
          onClick={() => confirm(true)}
          className="btn action"
          style={{
            backgroundColor: options.confirmColor
              ? options.confirmColor
              : iconColor,
            color: options.confirmTextColor
              ? options.confirmTextColor
              : "white",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleConfirmOut}
        >
          {options.confirmLabel ? options.confirmLabel : "Confirm"}
        </button>
        {!options.hideCancel && (
          <button
            onClick={() => confirm(false)}
            className="btn cancel"
            style={{
              backgroundColor: options.cancelColor
                ? options.cancelColor
                : "rgb(229 231 235)",
              color: options.cancelTextColor
                ? options.cancelTextColor
                : "black",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleCancelOut}
          >
            {options.cancelLabel ? options.cancelLabel : "Cancel"}
          </button>
        )}
      </div>
    </>
  );
}

export default ConfirmBox;
