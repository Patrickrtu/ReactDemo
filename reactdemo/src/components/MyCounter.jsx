import { useState } from "react";

const MyCounter = (props) => {
  const [countState, setCountState] = useState(77);

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

