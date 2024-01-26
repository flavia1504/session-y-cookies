const { check, body } = require("express-validator");

module.exports = [
    check("name")
        .notEmpty()
        .withMessage("Debes ingresar un nombre").bail()
        .isLength({ min: 2 })
        .withMessage("El nombre debe tener al menos 2 caracteres"),

    check("color")
        .notEmpty()
        .withMessage("Debes seleccionar un color").bail(),

    check("mail")
        .notEmpty()
        .withMessage("Debes ingresar un mail").bail()
        .isEmail()
        .withMessage("Debes ingresar un mail válido"),

    check("age")
        .isInt({ min: 1, max: 199 })
        .withMessage("Debes ingresar una edad válida"),
];