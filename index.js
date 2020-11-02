//#region Dependencias y Rutas
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./Routes/userRoute");
const app = express();
//#endregion
//#region Uso de Express y Conexion a la Base de Datos
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(userRouter);
mongoose.connect("mongodb://localhost/Test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(4000, () => {
  console.log("Server Running.....");
});
//#endregion
