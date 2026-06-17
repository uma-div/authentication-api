const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/users");
const errorHandler = require("./middlewears/errorHandler");
const app = express();

//!connect to mongodbc
mongoose
  .connect(
    "mongodb://umaramaraju10_db_user:EGwr2fKB4mbWOutz@ac-v5xoukd-shard-00-00.hfjcevj.mongodb.net:27017,ac-v5xoukd-shard-00-01.hfjcevj.mongodb.net:27017,ac-v5xoukd-shard-00-02.hfjcevj.mongodb.net:27017/AuthenticationAPI?ssl=true&replicaSet=atlas-qeshkc-shard-0&authSource=admin&appName=Cluster0",
  )
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
