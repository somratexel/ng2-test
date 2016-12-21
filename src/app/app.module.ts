import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from "ui-router-ng2";
import { FormsModule } from '@angular/forms';

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";


import { AppComponent } from './app.component';
import { HelloComponent } from './pages/hello/hello.component';
import { AboutComponent } from './pages/about/about.component';
import { PeopleComponent } from './pages/people/people.component';
import { PersonComponent } from './pages/person/person.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { ProfileComponent } from './pages/dashbaord/profile/profile.component';
import { SettingsComponent } from './pages/dashbaord/settings/settings.component';

import { PeopleService } from "./services/people.service";

import { MyUIRouterConfig } from "./config/router.config";

import { helloState, aboutState, peopleState, personState, dashbaordState, profileState, settingsState } from "./states";



let INITIAL_STATES =  [ helloState, aboutState, peopleState, personState, dashbaordState, profileState, settingsState ];


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    PeopleComponent,
    PersonComponent,
    DashbaordComponent,
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: false,
      configClass: MyUIRouterConfig
    })
  ],
  providers: [{ provide: PeopleService, useClass: PeopleService },],
  bootstrap: [AppComponent]
})
export class AppModule { }
