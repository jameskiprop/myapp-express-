//creating an express app

const express = require("express");

const app = express();

const port = 4000;
//Defining a wildcard route (*) with app.get() function:
app.get("*", function (req, res) {
  res.end("Hello World");
});

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",

    port
  );
});

//Hello World Example 3/4

app.get("/name/:user_name", function (req, res) {
  res.status(200);

  res.set("Content-type", "text/html");

  res.send(
    "<html><body>" +
      "<h1>Hello " +
      req.params.user_name +
      "</h1>" +
      "</body></html>"
  );
});

//Hello World  Example 4/4

const express = require("express");

const app = express();

const port = 4000;

app.get("/name/:user_name", function (req, res) {
  res.status(200);

  res.set("Content-type", "text/html");

  res.send(
    "<html><body>" +
      "<h1>Hello " +
      req.params.user_name +
      "</h1>" +
      "</body></html>"
  );
});
