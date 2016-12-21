import {UIRouter} from "ui-router-ng2";
import {Inject, Injectable} from "@angular/core";

/** UIRouter Config  */
@Injectable()
export class MyUIRouterConfig {
  constructor(@Inject(UIRouter) router: UIRouter) {
    // Plunker embeds can time out.
    // Pre-load the people list at startup.
    // peopleService.getAllPeople();

    // If no URL matches, go to the `hello` state by default
    //router.urlRouterProvider.otherwise(() =>  router.stateService.go('hello'));
    //router.urlRouterProvider.otherwise('hello');
    router.urlRouterProvider.otherwise('hello');
  }
}