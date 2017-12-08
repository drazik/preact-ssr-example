const express = require("express");
const { h } = require("preact");
const render = require("preact-render-to-string");
const { HelloWorld } = require("./src/HelloWorld");

const app = express();
app.listen(8080);

app.get("/", (req, res) => {
    let html = render(<HelloWorld />);
    res.send(`<!DOCTYPE html><html><body>${html}</body></html>`);
});
