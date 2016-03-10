import { inject, Aurelia } from 'aurelia-framework';
import { AuthService } from 'auth.service';
import { Router, RouterConfiguration } from 'aurelia-router';

@inject(Aurelia, Router, AuthService)
export class Logout {

  constructor(aurelia, router, authService) {
    this.aurelia = aurelia;
    this.authService = authService;
    this.router = router;
  }

  activate(){
      let self = this;
  		this.authService.logout().then(response=>{
        self.aurelia.setRoot('public').then(() => {
          //self.router.navigate('login', {});
        });
  		})
  		.catch(err=>{
  			console.log("error logged out  logout.js");
  		});
  }

}
