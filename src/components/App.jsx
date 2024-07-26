import React, { useState } from "react";

function App() {
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
    </div>
  );
}

export default App;
