import { h } from "preact";
import { Link } from "preact-router/match";

export const Home = () => (
    <div>
        <h1>Home page</h1>
        <Link href="/about">About</Link>
    </div>
);
