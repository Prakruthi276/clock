// src/App.js
import React from 'react';
import DigitalClock from './components/DigitalClock';
import Stopwatch from './components/Stopwatch';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <DigitalClock />
      <hr />
      <Stopwatch />
      <hr />
      <CountdownTimer />
    </div>
  );
}

export default App;
