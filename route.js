//GET method route

application.get("/", function (req, res) {
  res.send("get request to the HOMEPAGE");
});

//POST method route

application.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

//
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section ...");

  next(); // pass control to the next handler
});

//app.all(), used to load middleware functions at a path for all HTTP request methods.
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section");
});

next(); //passing the control to  the next handler

//Attaching methods to express

app
  .get("/", function (req, res) {
    res.send("GET request to the homepage");
  })
  .post("/", function (req, res) {
    res.send("POST request to the homepage");
  })
  .all("/secret", function (req, res, next) {
    console.log("Accessing the  secret section ...");
    next(); //passing the control to the next handler
  })
  .use(function (req, res, next) {
    res.status(404).send("Page introuvable !");
  });

//route to match requests to/about
app.get("/about", function (req, res) {
  res.send("about");
});

//route to match requests to/random.txt
app.get("/random.text", function (req, res) {
  res.send("random.text");
});

//ROUTE PATHS BASED ON STRING PATTERNS

//Route path to match  acd to abcd

app.get("/ab?cd", function (req, res) {
  res.send("ab?cd");
});

//Route to match abcd, abbcd, abbbcd, and so on

app.get("/ab+cd", function (req, res) {
  res.send("ab+cd");
});

//
