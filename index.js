const express = require("express");
require("dotenv").config();

//crear servidor de express
const app = express();

//directorio publico
app.use(express.static("public"));

//Rutas
app.use("/api/auth", require("./routes/auth"));
// TODO: CRUD: eventos

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
