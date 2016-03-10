import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class AdminLayout {
  constructor(router) {
    this.router = router;
  }
}
