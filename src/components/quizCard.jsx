import React, { useState, useEffect } from "react";

import globeImage from "../assets/undraw_adventure_4hum 1.svg";

const QuizCard = (props) => {
  const countries = props.countries;
  const [countryOptions, setCountryOptions] = useState([]);
  const [countryNumbers, setCountryNumbers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(null);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const getFourNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 4; i++) {
      numbers.push(getRandomInt(250));
    }
    setCountryNumbers(numbers);
  };

//   const test = () => {
//     //   clearTimeout(thisTimeout)
//     //   done = true;
//     // console.log("looping outside", countries);
//     // for some reason a temporary array is need to house the 
//     // options before setting them to state, rather than updating the state
//     // in each iteration of the loop
//     const tempArray = [];
//     for (let i = 0; i < 4; i++) {
//     //   console.log("looping inside", countries[countryNumbers[i]]);
//       tempArray.push(countries[countryNumbers[i]]);
//     }
//     // setCountryOptions(tempArray);
//     return tempArray;
//   };

  useEffect(() => {
    getFourNumbers();
    setQuestionNumber(getRandomInt(4));
    // console.log(countries)
    // setTimeout(() => console.log(props.countries), 3000);
    const tempArray = [];
    for (let i = 0; i < 4; i++) {
    //   console.log("looping inside", countries[countryNumbers[i]]);
      tempArray.push(countries[countryNumbers[i]]);
    }
    setCountryOptions(tempArray);

  }, [countries]);

//   let done = false;
//   let thisTimeout = setTimeout(function() {
//       console.log(test())
//   }, 3000)

//   if (countries !== [] && !done) {
//     console.log(test())

//   }

  console.log("options", countryOptions);

//     console.log(props.countries, countries);

  return (
    <div className="card quiz-card">
      <img src={globeImage} alt="globe" />
      <h2 className="question">Kuala Lumpur is the capital of</h2>
      <div className="options">
        <button className="quiz-option">
          <span>A</span>Vietnam
        </button>
        <button className="quiz-option correct no-hover">
          <span>B</span>Malaysia
        </button>
        <button className="quiz-option incorrect no-hover">
          <span>C</span>Sweden
        </button>
        <button className="quiz-option no-hover">
          <span>D</span>Austria
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
