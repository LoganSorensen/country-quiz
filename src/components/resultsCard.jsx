import React from 'react';

import victoryImage from '../assets/undraw_winners_ao2o 2.svg'

const ResultsCard = () => {
    return (
        <div className="card results-card">
            <img src={victoryImage} alt="celebration"/>
            <h2>Results</h2>
            <p>You got <span>4</span> correct answers</p>
            <button className='reattempt-btn'>Try again</button>
        </div>
    )
}

export default ResultsCard;