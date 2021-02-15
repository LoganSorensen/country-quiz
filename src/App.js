import { useState, useEffect } from "react";
import axios from "axios";

import QuizCard from "./components/quizCard";
import ResultsCard from "./components/resultsCard";

import "./styles/index.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const incrementQuestionNumber = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const incrementCorrectAnswers = () => {
    setCorrectAnswers(correctAnswers + 1);
  };

  const resetGame = () => {
    setQuestionNumber(0);
  }

  return (
    <div className="App">
      <h1>Country Quiz</h1>
      {countries !== [] && questionNumber < 5 ? (
        <QuizCard
          countries={countries}
          questionNumber={questionNumber}
          incrementQuestionNumber={incrementQuestionNumber}
          incrementCorrectAnswers={incrementCorrectAnswers}
        />
      ) : (
        <ResultsCard correctAnswers={correctAnswers} resetGame={resetGame} />
      )}
    </div>
  );
}

export default App;
