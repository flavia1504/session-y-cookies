const {validationResult} = require('express-validator');
const fs = require("fs");
const path = require("path");

const colores = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/colores.json"), "utf-8"));

module.exports = {
    getMainPage: (req, res) => {

        res.render('index' , {session: req.session, colores});
    },
    getData: (req, res) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
            req.session.userData = {
                name: req.body.name,
                color: req.body.color,
                colorTexto: colores.find(color => color.valor == req.body.color).texto,
                mail: req.body.mail,
                age: req.body.age,
            }

            let cookieTime = (1000 * 60 * 60); /* mSeg * seg * min * hor * dia */

                    if(req.body.recordar){
                        res.cookie("cookieColor",
                        req.session.userData,
                        {
                            expires: new Date(Date.now() + cookieTime),
                            httpOnly: true
                        })
                    }

            res.render('index', {session: req.session, colores})
        } else {
            res.render('index', {
                errors: errors.mapped(), 
                session: req.session,
                old: req.body,
                colores})
        }
    },
    gracias: (req, res) => {

        res.render('gracias', {session: req.session})
    },
    borrar: (req, res) => {
            
            res.clearCookie("cookieColor");
            req.session.destroy();
            res.redirect("/");
        }
}