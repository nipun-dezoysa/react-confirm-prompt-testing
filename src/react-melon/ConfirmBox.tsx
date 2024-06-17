import React from "react";
import "./ConfirmBox.css";
import { TiInfoOutline } from "react-icons/ti";
import { options } from "./varTypes";

function ConfirmBox(props: {
  resolve: (value: boolean) => void;
  container: string;
  title: string;
  options: options;
}) {
  const { resolve, container, title, options } = props;

  function confirm(answer: boolean) {
    const div = document.getElementById(container);
    if (div) {
      div.remove();
    }
    resolve(answer);
  }

  return (
    <>
      <div onClick={() => confirm(false)} className="backGround" />
      <div className="box">
        <div className="icon">
          <TiInfoOutline />
        </div>
        <div className="title">{title}</div>
        <div className="description">
          {options.description ? options.description : ""}
        </div>
        <button onClick={() => confirm(true)} className="btn action">
          {options.confirmLabel ? options.confirmLabel : "Confirm"}
        </button>
        {!options.hideCancel && (
          <button onClick={() => confirm(false)} className="btn cancel">
            {options.cancelLabel ? options.cancelLabel : "Cancel"}
          </button>
        )}
      </div>
    </>
  );
}

export default ConfirmBox;
