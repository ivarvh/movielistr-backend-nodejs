import { Context } from 'koa';
import { IRouterContext, IMiddleware } from 'koa-router';
import DirectorService from "../services/DirectorService";

export default class DirectorController {

    private directorService: DirectorService;

    constructor({ directorService }: { directorService: DirectorService }) {
        this.directorService = directorService;
    }

    public getAllDirectors: IMiddleware = (ctx: IRouterContext, next: () => Promise<any>) => {
        ctx.body = this.directorService.findAll();
    }

    public findDirectorById: IMiddleware = (ctx: IRouterContext, next: () => Promise<any>) => {
        this.directorService.findById(ctx.params.id);
    }
}