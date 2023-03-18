import React, { useState } from "react";
import Adult from "./Adult";
import Child from "./Child";
import "../Spark/spark.css";


function Spark() {
  const [component1Visible, setComponent1Visible] = useState(true);
  const [component2Visible, setComponent2Visible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick1 = () => {
    setComponent1Visible(true);
    setComponent2Visible(false);
    setIsActive(true);

    // Set a timeout to reset the active state after 2 seconds
    setTimeout(() => {
      setIsActive(false);
    }, 2000);
  };

  const handleButtonClick2 = () => {
    setComponent2Visible(true);
    setComponent1Visible(false);
    setIsActive(true);

    // Set a timeout to reset the active state after 2 seconds
    setTimeout(() => {
      setIsActive(false);
    }, 2000);
  };

  return (
    <>
      <div className="spark">
        <div className="buttons">
   
        <button className="{`button ${isActive ? 'active' : ''}`}" onClick={handleButtonClick1} >Children <br /> <div>(Age 6-10)</div></button>
        <button className="{`button ${isActive ? 'active' : ''}`}" onClick={handleButtonClick2}>Adult<br /> <div>(Age 10-15)</div></button>
        </div>
       

        <div className="components">
        {component1Visible && <Child />}
        {component2Visible && <Adult />}
        </div>

      
      </div>
    </>
  );
}

export default Spark;
