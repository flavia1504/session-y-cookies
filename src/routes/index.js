const express = require('express');
const router = express.Router();

const validation = require('../validations/validation');

const controller = require('../controllers/indexControllers');

router.get('/', controller.getMainPage);
router.post("/form" , validation , controller.getData);
router.get("/gracias" , controller.gracias);
router.get("/borrar" , controller.borrar);

module.exports = router; 