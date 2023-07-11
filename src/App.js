import "./App.css";
import React, { Component } from "react";

const array = [5, 2, 3, 7, 9];

function najveci(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function FunctionKomponenta() {
  return <div>{najveci(array)}</div>;
}

class ClassKomponenta extends Component {
  render() {
    return <div>Obican tekst</div>;
  }
}

function App() {
  return (
    <div className="App">
      <FunctionKomponenta />
      <ClassKomponenta />
    </div>
  );
}

export default App;
