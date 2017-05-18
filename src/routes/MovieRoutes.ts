import Route from "../models/Route";
import MovieController from "src/controllers/MovieController";

const movieRoutes = ({ movieController }:{ movieController: MovieController }) => [
    Route.newRoute("/movies", "get", movieController.getAllMovies),
    Route.newRoute("/movies/:id", "get", movieController.findMovieById),
    Route.newRoute("/movies", "post", movieController.addMovie),
];

export default movieRoutes;