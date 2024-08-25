// const { Signup } = require("../controllers/authController");
// const router = require("express").Router();

// //the /signup route has a post method attached to it, when it's been called, the Signup controller will be executed.
// router.post("./signup", Signup);

// module.exports = router;
const { Signup } = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;
