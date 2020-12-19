"use strict";
/*
 *  me.js
 *
 *  Express me route
 *
 */
const { Router } = require("express");
const router = Router();

router.get("/me", function (req, res, next) {
  console.log("ME");
  return res.status(200).send({ user: { emailAddress: "emailAddress" } });
});

module.exports = router;
