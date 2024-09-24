const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");

const PORT = process.env.PORT || 10801;

const FileSync = require("lowdb/adapters/FileSync.js");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ articulos: []}).write();

const app = express(); 

app.db = db;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, () => console.log(`El servidor esta corriendo en el puerto ${PORT}`));


