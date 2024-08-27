const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const router = require("./routes");

mongoose
  .connect("mongodb://localhost:27017/Ecommerce")
  .then(console.log("Conectado com sucesso"))
  .catch((erro) => {
    console.log(erro);
  });

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3003, () => {
  console.log("Servidor no ar");
});
