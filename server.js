var express = require("express");
var path = require("path");
const reservations = require("./res.js");
const waitlist = require("./waitlist.js")


const tableArray = []
const waitArray = []
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// reservations



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "res.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/tableArray/:table", function(req, res) {
  let chosen = req.params.table;

  console.log(waitlist);

  for (let i = 0; i < tableArray.length; i++) {
    if (chosen === tableArray[i].routeName) {
      return res.json(tableArray[i]);
    }
  }

  return res.json(false);
});


app.post("/api/tableArray", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  let newtableArray = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newtableArray.routeName = newtableArray.customerName.replace(/\s+/g, "").toLowerCase();

  console.log(newtableArray);

  characters.push(newtableArray);

  res.json(newtableArray);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});










