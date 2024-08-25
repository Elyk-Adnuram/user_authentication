// const User = require("../models/userModel");
// const { createSecretToken } = require("../utils/secretToken");
// const bcrypt = require("bcrypt");

// module.exports.Signup = async (req, res, next) => {
//   try {
//     //obtain user inputs from req.body
//     const { email, password, username, createdAt } = req.body;
//     //check if entered details already exist
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.json({ message: "User already exists" });
//     }
//     //create new user in DB and generate JWT for user based on _id property
//     const user = await User.create({ email, password, username, createdAt });
//     const token = createSecretToken(user._id); //MongoDB always assigns a new user with a unique _id
//     //token sent to client using cookie
//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//     });
//     res.status(201).json({ message: "User signed in successfully", success: true, user });
//     next();
//   } catch (err) {
//     console.log(err);
//   }
// };

const User = require("../models/userModel");
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
