const router = require("express").Router();
const connection = require("../db/connection");

router.get("/api/notes", function (req, res) {
  console.log("get data");
  connection.query("SELECT * FROM notes", function (err, dbNotes) {
    if (err) throw err;

    res.json(dbNotes);
  });
});

router.post("/api/notes", function (req, res) {
  connection.query("INSERT INTO notes SET ?", [req.body], function (err, result) {
    if (err) throw err;

    res.json(result);
  });
});

router.delete("/api/notes/:id", function(req, res) {
  connection.query("DELETE FROM notes WHERE id = ?", [parseInt(req.params.id)], function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;