import DirectorService from "./DirectorService";
import Movie from "../models/Movie";

export default class MovieService {

    private movies: Array<Movie> = [];
    private directorService: DirectorService;

    constructor({ directorService }: { directorService: DirectorService }) {
        this.directorService = directorService;
    }

    public addMovie(title: string, duration: number, releaseYear: number, directorId: number): Movie {
        const director = this.directorService.findById(directorId);
        const newMovie = Movie.newMovie(
            this.movies.length + 1, title, releaseYear, duration, director
        );

        this.movies.push(newMovie);

        return newMovie;
    }

    public findById(id: number): Movie {
        const movie = this.movies.find(movie => movie.$id === id);
        if (!movie) {
            throw new Error("No movie found with ID");
        }
        return movie;
    }

    public findAll(): Array<Movie> {
        return this.movies;
    }

}