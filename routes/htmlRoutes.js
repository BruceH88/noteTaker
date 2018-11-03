const path = require("path");
const router = require("express").Router();

// Render tables.html at the "/tables" path
router.get("/notes", function(req, res) {
  console.log("notes html page")
  res.sendFile(path.join(__dirname, "../public/assets/html/notes.html"));
});

// Render tables.html at the "/tables" path
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
});


module.exports = router;
