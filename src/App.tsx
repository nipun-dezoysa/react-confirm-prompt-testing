import { useState } from "react";
// import { showConfirm } from "./react-melon";
import { showConfirm } from "nipun-confirm";
import { TiInfoOutline } from "react-icons/ti";
function App() {
  function handleShowConfirm() {
    showConfirm("Are you sure?", {
      icon: <TiInfoOutline />,
      color: "rgb(96 165 250)",
    }).then((answer) => {
      if (answer) {
        alert("You clicked yes");
      } else {
        alert("You clicked no");
      }
    });
  }

  return (
    <>
      <button onClick={() => handleShowConfirm()}>Show Confirm</button>
    </>
  );
}
export default App;
