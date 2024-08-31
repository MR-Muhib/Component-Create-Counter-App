import { useState } from "react";

/** import useState use kore amra updatedal funsition creat kore */

function App() {
  const [dynamicCount, setDynamicCount] = useState(20);
  const [dynamicCount2, setDynamicCount2] = useState(50);

  /** useState amader akti [] arry return kore jar modde amra argument paramitar use kore count ke dynamic korte parbo */

  const increaseHandler = () => {
    setDynamicCount(dynamicCount + 1);
  };

  const discrisHandler = () => {
    setDynamicCount(dynamicCount - 1);
  };

  const increaseHandler2 = () => {
    setDynamicCount2(dynamicCount2 + 1);
  };

  const discrisHandler2 = () => {
    setDynamicCount2(dynamicCount2 - 1);
  };
  return (
    <>
      <div className="container">
        <p>Dynamic Data count {dynamicCount}</p>
        <button onClick={increaseHandler}>Increment Data</button>
        <button onClick={discrisHandler}>Discriminant Data</button>
      </div>

      <div className="container2">
        <p>Dynamic Data count {dynamicCount2}</p>
        <button onClick={increaseHandler2}>Increment Data</button>
        <button onClick={discrisHandler2}>Discriminant Data</button>
      </div>
    </>
  );
}

export default App;
