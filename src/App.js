import "./App.css";
import React, { Component } from "react";
import { Fun1, Fun2 } from "./Components";

const array = [5, 2, 3, 7, 9];
const istina = false;

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
    return <>{istina && <div>Obican tekst</div>}</>;
  }
}

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "lightgrey", fontSize: "20px" }}
    >
      <FunctionKomponenta />
      <ClassKomponenta />
      <Fun1 />
      <Fun2 />
    </div>
  );
}

export default App;
