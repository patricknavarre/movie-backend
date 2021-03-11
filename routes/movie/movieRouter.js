var express = require('express');
var router = express.Router();
var { createMovie, getAllMovie } = require("./controller/movieController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/get-all-movie", getAllMovie);

router.post("/create-movie", createMovie);

module.exports = router;
