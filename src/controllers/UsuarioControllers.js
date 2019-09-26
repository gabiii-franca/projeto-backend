const Usuario = require("../models/Usuario");
module.exports = {
  async store(req, res) {
    const usuario = await Usuario.create(req.body);
    return res.json(usuario);
  },
  async index(req, res) {
    const usuario = await Usuario.findOne({email: req.params.email });
    return res.json(usuario);
  },
  };