import React from "react";
import App from "../Components/App";
import RPSScoreboard from "../Components/RPS/RPSScoreboard";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

test("App Renders RPSScoreboard", () => {
    const app = shallow(<App />);
    const children = app.children();
    expect(children.find(RPSScoreboard)).toHaveLength(1);
});
