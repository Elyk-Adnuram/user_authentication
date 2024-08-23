require("dotenv").config();
const jwt = require("jsonwebtoken");

//generate a JWT based on a given id. below func is exported as a property of the module
module.exports.createSecretToken = (id) => {
  //jwt.sign is a built-in func of the jsonwebtoken library
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60, // set expiration time of the token to 3 days
  });
};
