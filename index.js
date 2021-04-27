const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const userRoutes = require("./routes/user");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(userRoutes);

app.listen(3000, () => {
  console.log("Server listening for requests on Port 3000");
});
