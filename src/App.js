import { useState, useEffect } from "react";
import axios from "axios";

import QuizCard from "./components/quizCard";
import ResultsCard from "./components/resultsCard";

import "./styles/index.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Country Quiz</h1>
      {countries !== [] && <QuizCard countries={countries} />}
      {/* <ResultsCard /> */}
    </div>
  );
}

export default App;
