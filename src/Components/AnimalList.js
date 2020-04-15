import React from "react";
const AnimalList = (props) => {
  const {
    id,
    species,
    name,
    sex,
    age,
    weight,
    castrater,
    chipe,
  } = props.animals;
  return (
    <ul>
      <li>
        <span>{id}</span>
        <span>
          <strong>{` Imie ${name}`}</strong>
        </span>
        <span>{` Gatunek ${species}`}</span>
        <span>{`  Płeć ${sex}`}</span>
        <span>{`  Wiek ${age} lat`}</span>
        <span>{`  Waga ${weight} kg`}</span>
        <span>{`  Kastrowany ${castrater ? "tak" : "nie"}`}</span>
        <span>{`  Nr chipa ${chipe}`}</span>
      </li>
    </ul>
  );
};

export default AnimalList;
