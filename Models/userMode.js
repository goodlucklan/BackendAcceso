//#region Schema del Usuario
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Nombres:{
        type: String,
        required: true,
        trim: true
    },
    DNI:{
        type: String,
        required: true,
        trim: true
    },
    Celular: {
        type: Number,
        required: true
    },
    Correo: {
        type: String,
        required: true
    }
},{versionKey: false})
const user = mongoose.model("User", userSchema);
module.exports = user;
//#endregion