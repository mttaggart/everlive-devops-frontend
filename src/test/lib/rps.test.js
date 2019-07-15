import RPS from "../../lib/rps";

test("Rock beats scissors", () => {
    const playerChoice = RPS.ROCK;
    const computerChoice = RPS.SCISSORS;
    expect(
        RPS.evaluate(playerChoice, computerChoice)
    ).toBe(RPS.WIN);
})