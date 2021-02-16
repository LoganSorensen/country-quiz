import React from "react";

import victoryImage from "../assets/undraw_winners_ao2o 2.svg";

const ResultsCard = (props) => {
  return (
    <div className="card results-card">
      <img src={victoryImage} alt="celebration" />
      <h2>Results</h2>
      <p>
        You got <span>{props.correctAnswers}</span> correct answer
        {props.correctAnswers > 1 ? "s" : ""}
      </p>
      <button className="reattempt-btn" onClick={props.resetGame}>
        Try again
      </button>
    </div>
  );
};

export default ResultsCard;
