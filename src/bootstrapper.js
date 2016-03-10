import { inject, noView, Aurelia } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import AppRouterConfig from './app.router.config';
import { AuthService } from 'auth.service';

//@noView
@inject(Aurelia, Router, AppRouterConfig, AuthService)
export class Bootstrapper {

  constructor(aurelia, router, appRouterConfig, authService) {
    this.aurelia = aurelia;
    this.authService = authService;
    this.appRouterConfig = appRouterConfig;
    this.router = router;
  }

  activate() {

    let isAuth = this.authService.isAuth;
    let root = isAuth ? 'app': 'public';
    let self = this;

    this.appRouterConfig.configure();
    this.aurelia.setRoot(root).then(() => {
      //if (!isAuth) { self.router.navigate('login', {}); }
    });
  }

}
