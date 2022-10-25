const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;
const allCoursesCategory = require("./data/courseCategory.json");

app.get("/allcoursecategory", (req, res) => {
  res.send(allCoursesCategory);
});

app.listen(port, () => {
  console.log("server xx is running", port);
});
