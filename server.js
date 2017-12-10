const express = require("express");
const { h } = require("preact");
const renderToString = require("preact-render-to-string");
const { App } = require("./src/App");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.listen(8080);

app.get("*", (req, res) => {
    const html = renderToString(<App url={req.url} />);

    res.send(`
<!DOCTYPE html>
<html>
    <body>
        <div id="app">${html}</div>

        <script src="./app.js"></script>
    </body>
</html>
    `);
});
