import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class Public {
  constructor(router) {
    this.router = router;
  }
}
