import { h } from "preact";
import Router from "preact-router";
import { Home } from "./Home";
import { About } from "./About";

export const App = ({url}) => (
    <Router url={url}>
        <Home path="/" />
        <About path="/about" />
    </Router>
);
