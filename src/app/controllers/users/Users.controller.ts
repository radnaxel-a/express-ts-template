import { Request, Response } from 'express';
import { Routes } from '../../config/Routes.enum';
import { Method } from '../../interfaces/Method.enum';
import { Controller } from '../Controller';

export class UsersController extends Controller {
    /**
     * Set the route for this controller in super()
     */
    constructor() {
        super(Routes.Users);
    }

    public [Method.GET](request: Request, response: Response): void {
        response.send('users get');
    }

    public [Method.POST](request: Request, response: Response): void {
        response.send('users post ' + request.params.uid);
    }

    public [Method.PUT](request: Request, response: Response): void {  
        response.send('users put ' + request.params.uid);
    }

    public [Method.DELETE](request: Request, response: Response): void {
        response.send('users delete ' + request.params.uid);
    }
}
