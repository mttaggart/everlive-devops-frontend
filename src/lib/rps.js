const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "WIN";
const LOSS = "LOSS";
const TIE = "TIE";

const beats = {
    "rock": "scissors",
    "paper": "paper",
    "scissors": "paper"
}

const evaluate = (playerChoice, computerChoice) => {
    console.log(beats[playerChoice])
    if(beats[playerChoice] === computerChoice) {
        return WIN;
    } else if (beats[computerChoice] === playerChoice) {
        return LOSS;
    } else {
        return TIE;
    }
}

export default {
    evaluate,
    ROCK,
    PAPER,
    SCISSORS,
    WIN,
    LOSS,
    TIE
}