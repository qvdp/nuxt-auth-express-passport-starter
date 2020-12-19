"use strict";
/*
 *  local-strategy.js
 *
 *  Local passport strategy
 *
 */
const { Strategy } = require("passport-local");
const mockedUsers = [
  { emailAddress: "test@example.com", password: "test1234" }
];

module.exports = new Strategy(
  { usernameField: "emailAddress", session: false },
  async (emailAddress, password, done) => {
    try {
      // Verify if user exist (good place to check email presency in database)
      const userRecord = mockedUsers.find(
        ({ emailAddress: userEmail }) => userEmail === emailAddress
      );
      if (!userRecord) {
        throw new Error("E_UNFOUND");
      }

      // Verify user password match (should be encrypted verification thanks to node/crypto or bcrypt or ...)
      if (userRecord.password !== password) {
        throw new Error("E_WRONG_PASSWORD");
      }

      // Generate JWT with userRecord as payload
      // const token = issueToken(userRecord.toObject())

      // Generate a session + user agent parsed
      return done(null, "abcdef");
    } catch (err) {
      return done(err, undefined);
    }
  }
); // •-
