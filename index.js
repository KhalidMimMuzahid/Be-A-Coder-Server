const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;
const allCoursesCategory = require("./data/courseCategory.json");
const allCourses = require("./data/courses.json");

app.get("/allcoursecategory", (req, res) => {
  res.send(allCoursesCategory);
});

app.get("/allcourses", (req, res) => {
  res.send(allCourses);
});

app.get("/eachcategorycoures/:id", (req, res) => {
  const id = req.params.id;
  const eachCategoryCoures = allCourses.filter(
    (course) => course.categoryId == id
  );
  res.send(eachCategoryCoures);
});

app.get("/eachcoures/:id", (req, res) => {
  const id = req.params.id;
  console.log("target ", id);
  const eachCoures = allCourses.filter((course) => course.id == id);
  res.send(eachCoures);
});

app.listen(port, () => {
  console.log("server xx is running", port);
});

module.exports = app;
