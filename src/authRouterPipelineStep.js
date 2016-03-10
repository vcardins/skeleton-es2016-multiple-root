import { inject, Aurelia } from 'aurelia-framework';
import { Redirect, NavigationInstruction, RouterConfiguration } from 'aurelia-router';
import { AuthService } from 'auth.service';

@inject(AuthService)
export class AuthRouterPipelineStep {

    constructor(authService) {
        this.authService = authService;
    }

    run(navigationInstruction, next) {

        debugger;
        var isAuth = this.authService.isAuth;
        if (!isAuth) {
          return next.cancel(new Redirect('login'));
        }

        if (route.name == 'login') {
          return next.cancel(new Redirect('welcome'));
        }

        //let route = routingContext.config;
        if (navigationInstruction.getAllInstructions().some(i => i.config.adminOnly))
        {
            var isAdmin = this.authService.isAdmin;
            if (!isAdmin) {
                return next.cancel(new Redirect('welcome'));
            }else{
                return next.cancel(new Redirect('admin'));
            }
        }

        return next();
    }
}
