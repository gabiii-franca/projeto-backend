const express = require("express");

const routes = express.Router();
const UsuarioControllers = require("./controllers/UsuarioControllers");

routes.post("/usuario", UsuarioControllers.store);
routes.get("/usuario/:email", UsuarioControllers.index);

module.exports = routes;
