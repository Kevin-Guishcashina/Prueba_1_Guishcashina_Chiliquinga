const express = require("express");
const app = express();
const { Router } = require("./routes/index");
app.use("/", Router);
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});