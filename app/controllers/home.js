const models = require("../models/contato");

module.exports = () => {
    const controller = {};

    controller.index = (req, res) => {
        res.render("index", {nome: "Express"});
    }

    return controller;
}