import { AppComponent } from './app.component';

import { HelloComponent } from './pages/hello/hello.component';
import { AboutComponent } from './pages/about/about.component';
import { PeopleComponent } from './pages/people/people.component';
import { PersonComponent } from './pages/person/person.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { ProfileComponent } from './pages/dashbaord/profile/profile.component';
import { SettingsComponent } from './pages/dashbaord/settings/settings.component';

import { PeopleService } from "./services/people.service";
import {Transition} from "ui-router-ng2";

/** States */
export const helloState = { name: 'hello', url: '/hello',  component: HelloComponent };

export const aboutState = { name: 'about', url: '/about',  component: AboutComponent };

export const peopleState = {
  name: 'people',
  url: '/people',
  component: PeopleComponent,
  resolve: [
    {
      token: 'people',
      deps: [PeopleService],
      resolveFn: (peopleSvc) => peopleSvc.getAllPeople()
    }
  ]
};

export const personState = {
  name: 'people.person',
  url: '/:personId',
  component: PersonComponent,
  resolve: [
    {
      token: 'person',
      deps: [Transition, 'people'],
      resolveFn: (trans, people) =>
          people.find(person => person.id === trans.params().personId)
    }
  ]
};

export const dashbaordState = { name: 'dashboard', url: '/dashboard',  component: DashbaordComponent };
export const profileState = { name: 'dashboard.profile', url: '/profile',  component: ProfileComponent };
export const settingsState = { name: 'dashboard.settings', url: '/settings',  component: SettingsComponent };
