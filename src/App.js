import React, { useState } from "react";
import "./App.css";
import baby from "./images/baby.jpg";
import dudley from "./images/dudley.jpg";
import hermione from "./images/hermione.jpg";
import draco from "./images/draco.jpg";
import ginny from "./images/ginny.jpg";
import bellatrix from "./images/bellatrix.jpg";
import molly from "./images/molly.jpg";
import rubeus from "./images/rubeus.jpg";
import minerva from "./images/minerva.jpg";
import albus from "./images/albus.jpg";
import myrtle from "./images/myrtle.png";
import hat from "./images/hat.webp";

export default function App() {
  var currentYear = 2023;
  const [birthYear, setbirthYear] = useState(0);
  const [age, setAge] = useState("(Enter age to see)");

  function inputChangeHandler(e) {
    if (e.target.value > currentYear) {
      setbirthYear(0);
      setAge(0);
      return;
    } else {
      setbirthYear(e.target.value);
      setAge(currentYear - e.target.value);
    }
  }

  function getImageAccordingToAge() {
    if (age <= 3) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={baby} />;
    } else if (age < 8) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={dudley} />;
    } else if (age < 13) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={hermione} />;
    } else if (age < 18) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={draco} />;
    } else if (age < 30) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={ginny} />;
    } else if (age < 40) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={bellatrix} />;
    } else if (age < 50) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={molly} />;
    } else if (age < 60) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={rubeus} />;
    } else if (age < 75) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={minerva} />;
    } else if (age <= 100) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={albus} />;
    } else if (age > 100) {
      return <img className="rounded-5 ratio ratio-1x1 w-50" src={myrtle} />;
    } else {
      return;
    }
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col py-3">
          <h1>AGE CALCULATOR</h1>
          <h2>Enter the year you were born in to calculate your age !</h2>
        </div>
      </div>
      <div className="row">
        <div className="col py-3">
          <input type="number" id="input" onChange={inputChangeHandler} />
          <h1>You are {age} years old!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 m-auto py-3 rounded-4" id="picture">
          {birthYear === 0 ? (
            <img className="App-logo" src={hat} />
          ) : (
            <div className="w-100 m-auto ration ration-1x1">
              {getImageAccordingToAge()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
