import React, { Component } from "react";
import "./App.css";
import AnimalList from "./AnimalList";
import addAnimal from "./addAnimal";
import AddAnimal from "./addAnimal";

class App extends Component {
  canter = 3;
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
    const items = [...this.state.tasks];
    const name = <div>{items.map((item) => item.name)}</div>;
    return console.log(name);
  };
  addTask = (species, name, sex, age, weight, castrater, chipe) => {
    const task = {
      id: this.canter++,
      species,
      name,
      sex,
      age,
      weight,
      castrater,
      chipe,
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };
  render() {
    return (
      <>
        <h3>Dodaj zwierzaka</h3>
        <AddAnimal addTask={this.addTask} />
        <button onClick={this.handelAll}>Wszystkie</button>
        <h2>
          <strong>{"Lista Zwierząt "}</strong>
        </h2>
        {this.state.tasks.map((task) => (
          <AnimalList animals={task} key={task.id} />
        ))}
        <h3>Lista pokarmów</h3>
      </>
    );
  }
}

export default App;
