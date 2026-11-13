const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  resp.end("home..");
});

app.get("/contact", (req, resp) => {
  resp.end("conatact");
});

app.use((req, resp) => {
  resp.end("error");
});

app.listen(4000, (req, resp) => {
  console.log("running");
});
