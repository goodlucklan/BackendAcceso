//#region Rutas del Crud
const express = require("express");
const userModel = require("../Models/userMode");
const app = express();

app.get("/user", async (req, res) => {
  const user = await userModel.find({});
  try {
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.post("/userInsert", async (req, res) => {
  const userInsert = new userModel(req.body);
  try {
    await userInsert.save();
    res.send(userInsert);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.delete("/user/:id", async (req, res) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(req.params.id);
    res.send("Usuario Anulado");
    if (!deleteUser) res.status(404).send("No se encontre usuario");
  } catch (error) {
    res.status(500).send(error);
  }
});
app.patch("/user/:id", async (req, res) => {
  try {
    const userUpdate = await userModel.findByIdAndUpdate(req.params.id, req.body);
    await userUpdate.save();
    res.status(200).send("Correcto");
  } catch {
    res.status(404);
    res.send("Data");
  }
});
module.exports = app;
//#endregion