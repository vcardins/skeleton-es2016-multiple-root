import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class App {
  constructor(router) {
    this.router = router;
  }
}
