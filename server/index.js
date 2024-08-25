// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors"); //allow requests from other domains to access the resources on the server
// const app = express();
// require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const authRoute = require("./routes/authRoute");
// const { MONGODB_URL, PORT } = process.env;

// mongoose
//   .connect(MONGODB_URL, {
//     useNewUrlParser: true, //specifies that Mongoose should use the new URL parser to parse MongoDB connection strings, set to true by default
//     useUnifiedTopology: true, // specifies that Mongoose should use the new Server Discovery and monitoring engine, set to false by default
//   })
//   .then(() => console.log("MongoDB is connected successfully"))
//   .catch((err) => console.log(err));

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// //The CORS headers that are included in the response is specified using the function's
// //optional configuration object parameter, which is taken as a parameter by the function which is the origin, methods and credentials.
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(cookieParser()); //cookie-parser manages cookie-based sessions or extracts data from cookies.

// app.use(express.json()); //allows access to the req.body parsed json data

// app.use("/", authRoute);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
