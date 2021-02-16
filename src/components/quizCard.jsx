import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";

import globeImage from "../assets/undraw_adventure_4hum 1.svg";

const QuizCard = (props) => {
  const countries = props.countries;
  const [countryOptions, setCountryOptions] = useState([]);
  const [countryNumbers, setCountryNumbers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(null);
  const [questionType, setQuestionType] = useState(null);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  let optionButtons = document.querySelectorAll(".quiz-option");
  let icons = document.querySelectorAll(".svg-inline--fa");

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

  const resetState = () => {
    icons = document.querySelectorAll(".svg-inline--fa");
    setQuestionAnswered(false);
    optionButtons.forEach((button) => {
      button.classList.remove("correct");
      button.classList.remove("incorrect");
      button.classList.remove("no-hover");
    });
    icons.forEach((icon) => {
      icon.classList.remove("display");
    });
  };

  useEffect(() => {
    getFourNumbers();
    setQuestionNumber(getRandomInt(4));
    setQuestionType(getRandomInt(2));
    // this temporary array is need to house the
    // options before setting them to state, rather than updating the state
    // in each iteration of the loop
    const tempArray = [];
    for (let i = 0; i < 4; i++) {
      tempArray.push(countries[countryNumbers[i]]);
    }
    setCountryOptions(tempArray);
  }, [countries, props.questionNumber]);

  const selectOption = (e) => {
    optionButtons = document.querySelectorAll(".quiz-option");

    optionButtons.forEach((button) => {
      button.classList.add("no-hover");
      if (countryOptions[questionNumber].name === button.value) {
        button.children[1].classList.add("display");
        button.classList.add("correct");
      }
    });

    if (e.target.value === countryOptions[questionNumber].name) {
      e.target.classList.add("correct");
      props.incrementCorrectAnswers();
    } else {
      e.target.classList.add("incorrect");
      e.target.children[2].classList.add("display");
    }

    setQuestionAnswered(true);
  };

  return (
    <>
      {countryOptions[0] !== undefined && (
        <div className="card quiz-card">
          <img src={globeImage} alt="globe" className="globe-img" />
          {questionType === 0 ? (
            <h2 className="question">
              {countryOptions[questionNumber].capital} is the capital of
            </h2>
          ) : (
            <div className="flag-question">
              <img
                src={countryOptions[questionNumber].flag}
                alt="country flag"
                className="flag"
              />
              <h2 className="question">
                Which country does this flag belong to?
              </h2>
            </div>
          )}

          <div className="options">
            <button
              className="quiz-option"
              value={countryOptions[0].name}
              onClick={selectOption}
            >
              <div className="no-hover">
                <span>A</span>
                {countryOptions[0].name}
              </div>
              <FontAwesomeIcon className="test" icon={faCheckCircle} />
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            <button
              className="quiz-option"
              value={countryOptions[1].name}
              onClick={selectOption}
            >
              <div className="no-hover">
                <span>B</span>
                {countryOptions[1].name}
              </div>
              <FontAwesomeIcon icon={faCheckCircle} />
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            <button
              className="quiz-option"
              value={countryOptions[2].name}
              onClick={selectOption}
            >
              <div className="no-hover">
                <span>C</span>
                {countryOptions[2].name}
              </div>
              <FontAwesomeIcon icon={faCheckCircle} />
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            <button
              className="quiz-option"
              value={countryOptions[3].name}
              onClick={selectOption}
            >
              <div className="no-hover">
                <span>D</span>
                {countryOptions[3].name}
              </div>
              <FontAwesomeIcon icon={faCheckCircle} />
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
          {questionAnswered === true && (
            <button
              className="next-btn"
              onClick={() => {
                props.incrementQuestionNumber();
                resetState();
              }}
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default QuizCard;
