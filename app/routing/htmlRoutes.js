let friendsFile = require("../data/friends");
let express = require("express");
let app = express();

app.get("/", function (req, res) {
    // res("Get Home");
    res.json(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.render(path.join(__dirname, "app/public/survey.html"));
});

app.get('*',function (req, res) {
    res.redirect('/');
});