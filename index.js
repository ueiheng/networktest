const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()).use(express.json());

app.get("/get", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  res.send("get code 200  " + name);
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("post code 200");
});

app.get("/api/text", (req, res) => {
  res.send("hello world");
});



app.listen(3000, () => {
  console.log("server is running on localgost 3000");
});
