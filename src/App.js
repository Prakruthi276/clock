// src/App.js
import React, { useState } from 'react';
import DigitalClock from './components/DigitalClock';
import Stopwatch from './components/Stopwatch';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('clock');

  return (
    <div className="App">
      <h1>🕓 React Time Toolkit</h1>

      <div className="tabs">
        <button onClick={() => setActiveTab('clock')} className={activeTab === 'clock' ? 'active' : ''}>
          Digital Clock
        </button>
        <button onClick={() => setActiveTab('stopwatch')} className={activeTab === 'stopwatch' ? 'active' : ''}>
          Stopwatch
        </button>
        <button onClick={() => setActiveTab('countdown')} className={activeTab === 'countdown' ? 'active' : ''}>
          Countdown Timer
        </button>
      </div>

      <div className="content">
        {activeTab === 'clock' && <DigitalClock />}
        {activeTab === 'stopwatch' && <Stopwatch />}
        {activeTab === 'countdown' && <CountdownTimer />}
      </div>
    </div>
  );
}

export default App;
