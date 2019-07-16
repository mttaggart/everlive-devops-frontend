import React from "react";

const RPSScoreboard = ({score}) => (
    <div className="rps-scoreboard">
        <h2>Score</h2>
        <h3>Wins: {score.wins}</h3>
        <h3>Losses: {score.losses}</h3>
        <h3>Ties: {score.ties}</h3>
    </div>
);

export default RPSScoreboard;