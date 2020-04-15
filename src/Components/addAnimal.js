import React, { Component } from "react";
class AddAnimal extends Component {
  state = {
    species: "",
    name: "",
    sex: "",
    age: "",
    weight: "",
    castrater: false,
    chipe: "",
  };
  handelChangeSpecies = (e) => {
    this.setState({
      species: e.target.value,
    });
  };
  handelChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handelChangeSex = (e) => {
    this.setState({
      sex: e.target.value,
    });
    console.log(this.state.sex);
  };
  handelChangeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handelChangeWeight = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };
  handelChangeCastrater = (e) => {
    this.setState({
      castrater: e.target.value,
    });
  };
  handelChangeChipe = (e) => {
    this.setState({
      chipe: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="gatunek"
          value={this.state.species}
          onChange={this.handelChangeSpecies}
        ></input>
        <input
          type="text"
          placeholder="imie"
          value={this.state.name}
          onChange={this.handelChangeName}
        ></input>
        <select sex="plec" onChange={this.handelChangeSex}>
          <option value="">płeć</option>
          <option value="male">męska</option>
          <option value="female">żeńska</option>
        </select>
        <input
          type="number"
          placeholder="wiek w latach"
          value={this.state.age}
          onChange={this.handelChangeAge}
        ></input>
        <input
          type="number"
          placeholder="waga w kilogramach"
          value={this.state.weight}
          onChange={this.handelChangeWeight}
        ></input>
        <input
          type="checkbox"
          checked={this.state.castrater}
          id="castrater"
          onChange={this.handelChangeCastrater}
        ></input>
        <label htmlFor="castrater">kastrowany</label>
        <input
          type="number"
          placeholder="nr czipa"
          value={this.state.chipe}
          onChange={this.handelChangeChipe}
        ></input>
        <button onClick={this.handlerClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddAnimal;
