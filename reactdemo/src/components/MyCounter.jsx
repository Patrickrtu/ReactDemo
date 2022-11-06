import { useState } from "react";
import React from "react";

const MyCounter = (props) => {
  const [countState, setCountState] = useState(56);

  function intCount() {
    setCountState(countState + props.incBy);
  }
  return (
    <div>
      <div>{countState}</div>
      <button onClick={intCount}>+{props.incBy}</button>
    </div>
  );
};
export default MyCounter;
