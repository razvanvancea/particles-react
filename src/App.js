import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_are: 800
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

const App = () => (
  <div className="App">
    <Particles className="particles" params={particlesOptions} />
  </div>
);

export default App;
