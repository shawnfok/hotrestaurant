const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [];
let waitList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/api/tables", function (req, res) {
    res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitList);
});

app.post("/api/tables", function (req, res) {
    let newTable = req.body;
    console.log(newTable);
    if (tables.length < 5) {
        tables.push(newTable);
        // console.log(newTable);
        console.log("tables");
        console.log(tables);
    } else {
        waitList.push(newTable);
        // console.log(newTable);
        console.log("waitlist");
        console.log(waitList);
    }

    res.json(newTable);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
