import React from "react";

import globeImage from "../assets/undraw_adventure_4hum 1.svg";

const QuizCard = () => {
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
