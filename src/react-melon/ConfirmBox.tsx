import React from "react";
import "./ConfirmBox.css";
import { TiInfoOutline } from "react-icons/ti";

function ConfirmBox(props: {
  resolve: (value: boolean) => void;
  container: string;
  options: { title: string; description: string };
}) {
  const { resolve, container } = props;

  function confirm(answer: boolean) {
    resolve(answer);
    const div = document.getElementById(container);
    if (div) {
      div.remove();
    }
  }

  return (
    <>
      <div onClick={() => confirm(false)} className="backGround" />
      <div className="box">
        <div className="icon">
          <TiInfoOutline />
        </div>
        <div className="title">Are you sure?</div>
        <div className="description">
          This action cannot be undone. All values associated with this field
          will be lost.
        </div>
        <button onClick={() => confirm(true)} className="btn action">
          Delete field
        </button>
        <button onClick={() => confirm(false)} className="btn cancel">
          Cancel
        </button>
      </div>
    </>
  );
}

export default ConfirmBox;
