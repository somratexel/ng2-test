import { Component } from '@angular/core';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";

@Component({
  selector: 'app-root',
  //directives: [UIROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
