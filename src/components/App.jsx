import React, { useState } from "react";
import Practice from "./practice";

function App() {
  const { tesla, honda } = Practice;
  const teslaTopSpeed = tesla.speedStats.topSpeed;
  const hondaTopSpeed = honda.speedStats.topSpeed;
  const teslaTopColour = tesla.coloursByPopularity[0];
  const hondaTopColour = honda.coloursByPopularity[0];

  var options = { hour12: false };
  let localTime = new Date().toLocaleTimeString("en-US", options);
  const [time, setTime] = useState(localTime);

  function getTimeMethod() {
    setTime(new Date().toLocaleTimeString("en-US", options));
  }
  setInterval(getTimeMethod, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTimeMethod}>Get Time</button>
      <h2>{time}</h2>
      <br />
      <br />
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top color</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
