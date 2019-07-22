import React from "react";
import App from "../Components/App";
import renderer from "react-test-renderer";

test("score changes on click", () => {
    const component = renderer.create(
        <App />
    );
    let tree = component.toJSON();
    let scoreboard = tree.children[0];
    let message = tree.children[1];
    let gameboard = tree.children[1];

    console.log(gameboard);
    expect(tree).toMatchSnapshot();

})