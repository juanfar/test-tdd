const express = require("express");
const parser = require("body-parser");
const { users } = require("./src/endpoints");
const app = express();
const axios = require("axios");
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
 
// parse application/json
app.use(parser.json());

const usersHandlers = users({ axios });

app.get("/", usersHandlers.get);
app.post("/", usersHandlers.post);
app.put("/:id", usersHandlers.put);
app.delete("/:id", usersHandlers.delete);

app.listen(port, () => console.log(`App listening on port ${port}`));