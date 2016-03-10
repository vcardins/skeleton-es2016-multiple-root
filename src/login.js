import { inject, Aurelia } from 'aurelia-framework';
import { AuthService } from 'auth.service';
import { Router, RouterConfiguration } from 'aurelia-router';

@inject(Aurelia, Router, AuthService)
export class Login {
  username = '';
  password = '';

  constructor(aurelia, router, authService) {
    console.log(router)
    this.router = router;
    this.authService = authService;
    this.aurelia = aurelia;
  }

  activate() {

    if (this.authService.isAuth) {
      this.router.navigate('', {});
    }
  }

  submit() {
    let self = this;
    this.authService.authenticate(this.username, this.password).then((response)=>{
        self.aurelia.setRoot('app').then(() => {
          //self.router.navigate('', {});
        });
      })
      .catch(err=>{
        console.error(err.message);
      });
  }

}
