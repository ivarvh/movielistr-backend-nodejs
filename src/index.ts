import DirectorController from './controllers/DirectorController';
import MovieController from './controllers/MovieController';
import { createContainer, Lifetime } from 'awilix';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import DirectorService from "./services/DirectorService";
import MovieService from "./services/MovieService";
import movieRoutes from "./routes/MovieRoutes";
import directorRoutes from "./routes/DirectorRoutes";
import Route from "./models/Route";

const app = new Koa();
const router = new Router();

export const container = createContainer();

container.registerFunction("movieRoutes", movieRoutes);
container.registerFunction("directorRoutes", directorRoutes);
container.registerClass("directorService", DirectorService);
container.registerClass("movieService", MovieService);
container.registerClass("movieController", MovieController);
container.registerClass("directorController", DirectorController);

const registerRoute = (route: Route) => {
    switch (route.$method) {
        case ("get"):
            router.get(route.$path, route.$action);
            break;
        case ("post"):
            router.post(route.$path, route.$action);
            break;
        case ("put"):
            router.put(route.$path, route.$action);
            break;
        case ("delete"):
            router.delete(route.$path, route.$action);
            break;
    }
};

container.cradle.movieRoutes.forEach(registerRoute);
container.cradle.directorRoutes.forEach(registerRoute);

app.use(router.routes());
app.use(bodyParser());
app.use(router.allowedMethods());


app.listen(3000);



