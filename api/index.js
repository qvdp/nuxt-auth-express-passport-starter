const express = require("express");
const { json } = require("body-parser");
const passport = require("passport");
const localStrategy = require("./passport/local-strategy");

// Require API routes
const auth = require("./routes/auth");
const logout = require("./routes/logout");
const me = require("./routes/me");

// Create express instance
const app = express();

// Middleware
app.use(json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
passport.use(localStrategy);
app.use(passport.initialize());

// Start routing
app.use(auth);
app.use(logout);
app.use(me);
app.use("/*", (req, res) => res.unfound());

module.exports = {
  path: "/api",
  handler: app
};
