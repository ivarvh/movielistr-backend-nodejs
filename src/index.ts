import { createContainer, Lifetime } from 'awilix';
import DirectorService from "./services/DirectorService";
import MovieService from "./services/MovieService";

export const container = createContainer();

container.registerClass({ directorService: [DirectorService, { lifetime: Lifetime.SINGLETON }] });
container.registerClass({ movieService: [MovieService, { lifetime: Lifetime.SINGLETON }] });

const movieService: MovieService = container.cradle.movieService;

movieService.addMovie("From Dusk Till Dawn", 108, 1996, 1);

console.log(JSON.stringify(movieService.findAll()));



