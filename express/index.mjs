import fetch from "node-fetch";
import express from "express";
const app = express();
const PORT = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemon", async (req, res) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
