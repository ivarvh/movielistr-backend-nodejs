import DirectorService from "./DirectorService";
import Movie from "../models/Movie";

export default class MovieService {

    private movies: Array<Movie> = [];
    private directorService: DirectorService;

    constructor({ directorService }: { directorService: DirectorService }) {
        this.directorService = directorService;
    }

    public addMovie(title: string, duration: number, releaseYear: number, directorId: number) {
        const director = this.directorService.findById(directorId);

        this.movies.push(Movie.newMovie(
            this.movies.length + 1, title, releaseYear, duration, director
        ));
    }

    public findById(id: number): Movie {
        const movie = this.movies.find(movie => movie.$id === id);
        if (!movie) {
            throw new Error("No movie found with ID");
        }
        return movie;
    }

    public findAll() {
        return this.movies;
    }

}