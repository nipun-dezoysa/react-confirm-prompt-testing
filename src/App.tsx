import { useState } from "react";
import { showConfirm } from "./react-melon";
function App() {
  function handleShowConfirm() {
    showConfirm("Are you sure?", {
      description:
        "This action cannot be undone. All values associated with this field will be lost.",
      type: "success",
      disableBlur: true,
    }).then((answer) => {
      alert("User answered " + answer);
    });
  }

  return (
    <>
      <button onClick={() => handleShowConfirm()}>Show Confirm</button>
    </>
  );
}

export default App;
