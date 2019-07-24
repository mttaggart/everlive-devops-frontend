import React from "react";
import RPS from "../lib/rps";
import RPSContainer from "./RPS/RPSContainer";
import RPSScoreboard from "./RPS/RPSScoreboard";
import RPSMessage from "./RPS/RPSMessage";
import RPSGameboard from "./RPS/RPSGameboard";

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            wins: 0,
            losses: 0,
            ties: 0,
            message: "" 
        }
    }

    choose(playerChoice) {
        const computerChoice = RPS.getComputerChoice();
        const result = RPS.evaluate(playerChoice, computerChoice);

        if (result === RPS.WIN) {
            this.setState({
                wins: this.state.wins + 1,
                message: `Computer chose ${computerChoice}. You win!`
            });
        } else if (result === RPS.LOSS) {
            this.setState({
                losses: this.state.losses + 1,
                message: `Computer chose ${computerChoice}. You lose!`
            });
        } else {
            this.setState({
                ties: this.state.ties + 1,
                message: `Computer also chose ${computerChoice}. It's a tie!`
            });
        }
    }


    render() {
        const score = {
            wins: this.state.wins,
            losses: this.state.losses,
            ties: this.state.ties
        };

        return (
            <RPSContainer>
                <RPSScoreboard score={score} />
                <RPSMessage message={this.state.message} />
                <RPSGameboard choose={this.choose.bind(this)} />
            </RPSContainer>
        );
    }
};

export default App;