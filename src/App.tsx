import { useState } from "react";
import { showConfirm } from "./react-melon";

function App() {

  function handleShowConfirm() {
    showConfirm().then((answer) => {
      alert("User answered "+answer);
    });
  }

  return (
    <>
      <button onClick={() => handleShowConfirm()}>Show Confirm</button>
    </>
  );
}

export default App;
