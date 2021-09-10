import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./style/App.css";
import Navbar from "src/components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
