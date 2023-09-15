import React from "react";
import classes from "./Spinner.module.css";

function Spinner(props) {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
}
export default Spinner;
