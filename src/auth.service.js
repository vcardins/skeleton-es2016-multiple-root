import { inject, Aurelia } from 'aurelia-framework';
import { LocalStorage } from 'localstorage.service';

@inject(LocalStorage)
export class AuthService {
  key:string = 'demo_token';
  keyAdmin:string = 'demo_isadmin';
  guid:string = '395930b9-5a1f-4356-b77b-2056db0edecf';

  constructor(localStorage) {
    this.localStorage = localStorage;
  }

  get isAuth() {
    let token = this.localStorage.get(this.key);
    return !!token;
  }

  get isAdmin() {
    let isAdmin = this.localStorage.get(this.guid);
    return !!isAdmin;
  }

  authenticate(username, password) {
    return new Promise((resolve, reject) => {
        if (username == 'demo' && password == 'demo') {
          this.localStorage.set(this.key, this.guid);
          resolve({message:'User autenticated'})
        } else {
          reject({message:'User NOT autenticated'})
        }
    });
  }

  logout(username, password) {
    return new Promise((resolve, reject) => {
      this.localStorage.remove(this.key);
      resolve({message:'User Logged out'})
    });
  }

}
