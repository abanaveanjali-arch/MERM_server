const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  resp.end("homeee");
});

app.post("/data", (req, resp) => {
  const result = req.body;
  console.log(result);
  resp.json(result);
});

app.listen(4000, (req, resp) => {
  console.log("runniggg");
});
