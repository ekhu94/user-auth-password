const express = require("express");
const path = require("path");

const userRoute = require("./routes/user");
const { router: userRoutes, users } = userRoute;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.render("index", { title: "All Users", users });
});

app.listen(3000, () => {
  console.log("Server listening for requests on Port 3000");
});
