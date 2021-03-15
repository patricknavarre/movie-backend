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
        data: savedMovie,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  getAllMovie: async (req, res) => {

    try{

        let allMovie = await Movie.find({});

        res.json({
            data: allMovie,
        });

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
  }, 

  deleteByID: async (req, res) => {
      try {

        let deletedMovie = await Movie.findByIdAndDelete({
            _id: req.body.movieID,
        });
        res.json({
            data: deletedMovie,
        })

      } catch (e) {
          res.status(500).json({ error: e.message });
      }
  },
  updateMovieByID: async (req, res) => {
    try {
      let updatedMovie = await Movie.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
  
      res.status(200).json({
        message: "successfully updated",
        updatedMovie: updatedMovie,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        errorMessage: error.message,
      });
    }
  },


};
