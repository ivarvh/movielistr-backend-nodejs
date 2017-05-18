import DirectorController from '../controllers/DirectorController';
import Route from "../models/Route";

const directorRoutes = ({ directorController }: { directorController: DirectorController }) => [
    Route.newRoute("/directors", "get", directorController.getAllDirectors),
    Route.newRoute("/directors/:id", "get", directorController.findDirectorById)
];

export default directorRoutes;