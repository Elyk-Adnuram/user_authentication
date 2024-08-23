const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); //allow requests from other domains to access the resources on the server
require("dotenv").config();
const { MONGODB_URL, PORT } = process.env;
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");

//The CORS headers that are included in the response is specified using the function's
//optional configuration object parameter, which is taken as a parameter by the function which is the origin, methods and credentials.
app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//allows access to the req.body parsed json data
app.use(express.json());

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true, //specifies that Mongoose should use the new URL parser to parse MongoDB connection strings, set to true by default
    useUnifiedTopology: true, // specifies that Mongoose should use the new Server Discovery and monitoring engine, set to false by default
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log(err));

//cookie-parser manages cookie-based sessions or extracts data from cookies.
app.use(cookieParser());

app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
