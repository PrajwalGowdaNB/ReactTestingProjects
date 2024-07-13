import React, { useState } from "react";
import "./App.scss";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextColor =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const buttonClickHandler = () => {
    setButtonColor(nextColor);
  };
  const [disableButton, setDisableButton] = useState(false);
  const checkboxOnChangeHandler = (e) => {
    setDisableButton(e.target.checked);
  };
  return (
    <div className="button-container">
      <button
        disabled={disableButton}
        className={buttonColor}
        onClick={buttonClickHandler}
      >
        {" "}
        Click to change {kebabCaseToTitleCase(nextColor)}
      </button>
      <input
        name="check1"
        id="check1"
        type="checkbox"
        onChange={checkboxOnChangeHandler}
      />
      <label htmlFor="check1">Checkbox label</label>
    </div>
  );
}

export default App;
