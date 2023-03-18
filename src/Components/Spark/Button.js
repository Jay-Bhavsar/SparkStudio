import React, { useState } from "react";
import "../Spark/spark.css";

function sparkbutton() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <div className="button">
      <button onClick={handleClick} className={isActive ? "active" : ""}>
        Click me
      </button>
    </div>
  );
}

export default sparkbutton;
