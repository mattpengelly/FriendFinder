let friendsFile = require("../data/friends");
let express = require("express");
let app = express();

app.get("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "app/data/friends.js"));
});

app.post("/api/friends", function (req, res) {

    matchScoreArr = [];
    friends = friendsFile.friendsArr;
    for (i = 0; i < friends.length; i++) {
        let match = 0;
        for (i = 0; i < req.answers.length; i++) {
            match += Math.abs(req.answers[i] - friends.scores[i]);
        }
        matchScoreArr.push(match)
    }
    let bestScore = Math.min(...matchScoreArr);
    let matchIndex = matchScoreArr.indexOf(bestScore);
    res.json(friends[matchIndex]);
});

module.exports = app;