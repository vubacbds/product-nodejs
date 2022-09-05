const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/UserController");

router.post("/", userController.signup);

module.exports = router;
