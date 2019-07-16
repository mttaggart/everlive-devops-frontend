import React from "react";
import RPS from "../../lib/rps";

const RPSGameboard = ({choose}) => (
    <div className="rps-gameboard">
        <button 
            onClick={() => choose(RPS.ROCK)}
        >
            Rock
        </button>
        <button 
            onClick={() => choose(RPS.PAPER)}
        >
            Paper
        </button>
        <button 
            onClick={() => choose(RPS.SCISSORS)}
        >
            Scissors
        </button>
    </div>
);

export default RPSGameboard;