import { inject, Aurelia } from 'aurelia-framework';
import { Router, Redirect } from 'aurelia-router';
import { AuthService } from 'auth.service';

@inject(AuthService)
export class AuthRouterPipelineStep {

    constructor(authService) {
      this.authService = authService;
    }

    run(routingContext:any, next:any) {

      var isAuth = this.authService.isAuth;
      if (!isAuth) {
        return next.cancel(new Redirect('login'));
      }

      if (route.name == 'login') {
        return next.cancel(new Redirect('welcome'));
      }

      if ( ((route.name == this.appSettings.loginRoute) && isAuthenticated) || (routeBitMask > userAccessLevel.bitMask) ) {
        this.logger.error('Sorry, you don\'t have access to this module.');
        return next.cancel(new Redirect(this.appSettings.defaultRoute));
      }

      if (routingContext.getAllInstructions().some(i => i.config.adminOnly)) {
        var root = this.authService.isAdmin ? 'admin' : 'welcome';
        return next.cancel(new Redirect(root));
      }

      return next();
    }

}
