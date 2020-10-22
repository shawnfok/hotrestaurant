const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [];
let waitList = [];

app.get("/", function (req, res) {
    res.send("Welcome to the homepage");
});

app.get("/tables", function (req, res) {
    res.send("Welcom to the tables");
});

app.get("/reserve", function (req, res) {
    res.send("Welcom to reservation");
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

app.post("/api/tables", function (req, res) {
    let newTable = req.body;
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

// app.post("/api/waitlist", function (req, res) {
//     let newTable = req.body;
//     console.log(newTable);
//     waitList.push(newTable);
//     res.json(newTable);
// });





app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
