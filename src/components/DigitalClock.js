// src/components/DigitalClock.js
import React, { useState, useEffect, useRef } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true); // Track if clock is running
  const intervalRef = useRef(null); // Store interval ID

  // Function to start the clock
  const startClock = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  // Function to stop the clock
  const stopClock = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  // useEffect to control timer behavior
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => clearInterval(intervalRef.current); // Cleanup
  }, [isRunning]); // Re-run when isRunning changes

  return (
    <div>
      <h2>🕒 Digital Clock</h2>
      <h1>{time.toLocaleTimeString()}</h1>
      <button onClick={startClock} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopClock} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}

export default DigitalClock;
