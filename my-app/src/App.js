import logo from "./logo.svg";
import "./App.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(50);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <h1>Slider Value: {value}</h1>
      <Slider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={handleSliderChange}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
