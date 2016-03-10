import { inject } from 'aurelia-dependency-injection';
import { Router, RouterConfiguration } from 'aurelia-router';
import { AuthRouterPipelineStep } from 'authRouterPipelineStep';

@inject(Router)
export default class {

	constructor(router){
		this.router = router;
	}

	configure(){
		if (this.router.isConfigured) { return; }
		let self = this;
		let appRouterConfig:any = ((config) => {
      config.title = 'Aurelia';
			config.options.pushState = true; 		// <-- this is all you need here
      config.addPipelineStep('authorize', AuthRouterPipelineStep); // Add a route filter to the authorize extensibility point.
      config.map([
        { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true,  title: 'Welcome'},
        { route: 'users',         name: 'users',        moduleId: 'users',        nav: true,  title: 'Github Users' },
        { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true,  title: 'Child Router' },
        { route: 'logout',        name: 'logout', 		  moduleId: 'logout',       nav: true,  title:'Logout' },
        { route: 'login',         name: 'login', 		    moduleId: 'login',       	nav: false, title:'Login', public: true },
        { route: 'info',          name: 'info', 		    moduleId: 'info',       	nav: false, title:'Info', public: true }
      ]);
			// config.mapUnknownRoutes(instruction => {
			//    self.router.navigate('login', {});
    	// });
	 	});
		this.router.configure(appRouterConfig);
	}
}
