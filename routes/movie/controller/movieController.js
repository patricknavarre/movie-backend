const Movie = require("../model/Movie.js");

module.exports = {
  createMovie: async (req, res) => {
    // res.send("WE'RE GOOD!!!")
    try {
      let newMovie = new Movie({
        movie: req.body.movie,
      });

      let savedMovie = await newMovie.save();

      res.json({
        newMovie: savedMovie,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
