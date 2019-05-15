let express = require("express");
let path = require("path");
let friendsFile = require("./app/data/friends");

let app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let routes = require("./app/routing/apiRoutes.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});