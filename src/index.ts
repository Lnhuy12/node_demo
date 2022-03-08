import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/home_page", (req, res) => {
  res.send("Hello world home ");
});

app.listen(port, () => {
  console.log("on port ", port);
});
