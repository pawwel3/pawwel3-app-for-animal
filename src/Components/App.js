import React, { Component } from "react";
import "./App.css";
import AnimalList from "./AnimalList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        species: "pies",
        name: "Durdek",
        sex: "male",
        age: 10,
        weight: 10,
        castrater: true,
        chipe: 158487,
      },
      {
        id: 2,
        species: "pies",
        name: "Alma",
        sex: "female",
        age: 15,
        weight: 40,
        castrater: true,
        chipe: 158457,
      },
      {
        id: 3,
        species: "pies",
        name: "Pedro",
        sex: "male",
        age: 3,
        weight: 10,
        castrater: false,
        chipe: 158257,
      },
    ],
  };
  handelAll = () => {
    console.log("działa");
  };
  render() {
    return (
      <>
        <button onClick={this.handelAll}>Wszystkie</button>
        {this.state.tasks.map((task) => (
          <AnimalList animals={task} key={task.id} />
        ))}
      </>
    );
  }
}

export default App;
