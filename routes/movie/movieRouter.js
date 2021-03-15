var express = require('express');
var router = express.Router();
var { createMovie, 
    getAllMovie, 
    deleteByID } = require("./controller/movieController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/get-all-movie", getAllMovie);

router.post("/create-movie", createMovie);

router.delete("/delete-by-id", deleteByID);

module.exports = router;
