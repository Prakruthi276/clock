// src/components/CountdownTimer.js
import React, { useState, useRef } from 'react';

function CountdownTimer() {
  const [inputSeconds, setInputSeconds] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const intervalRef = useRef(null);

  const startCountdown = () => {
    if (inputSeconds > 0) {
      setSecondsLeft(inputSeconds);
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const resetCountdown = () => {
    clearInterval(intervalRef.current);
    setSecondsLeft(0);
    setInputSeconds('');
  };

  return (
    <div>
      <h2>⏳ Countdown Timer</h2>
      <input
        type="number"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(e.target.value)}
        placeholder="Enter seconds"
      />
      <button onClick={startCountdown}>Start</button>
      <button onClick={resetCountdown}>Reset</button>
      <h1>{secondsLeft}s</h1>
    </div>
  );
}

export default CountdownTimer;
