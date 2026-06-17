require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/users");
const errorHandler = require("./middlewears/errorHandler");
const app = express();

//!connect to mongodbc
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Db connected successfully"))
  .catch((e) => console.log(e));

//!middlewares
app.use(express.json());
//!routes
app.use("/", router);
//!error handlers
app.use(errorHandler);
//!Start the server
const PORT = 5000;
app.listen(PORT, console.log("server is up running"));
