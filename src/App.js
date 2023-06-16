import React from "react";
import ZipAPI from "./components/ZipAPI";
import DistanceAPI from "./components/DistanceAPI";
import "./App.css";

function App() {
  return (
    <div className="main">
      <ZipAPI title="Zip Code Sreach" />
      <DistanceAPI title="Calculate the Distance" />
    </div>
  );
}

export default App;
