// src/components/Stopwatch.js
import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      setIsActive(true);
    }
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h2>⏱️ Stopwatch</h2>
      <h1>{seconds}s</h1>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

export default Stopwatch;
