import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class PeopleService {
  constructor(@Inject(Http) public http: Http) {

  }

  // Plunker embeds can time out.
  // Pre-load the data when the app loads.
  cache = null;

  getAllPeople() {
    return this.cache = this.cache || this.http.get('data/people.json')
        .map(resp =>  resp.json())
        .toPromise();
  }

  getPerson(id) {
    function personMatchesParam(person) {
      return person.id === id;
    }

    return this.getAllPeople()
        .then(people => people.find(personMatchesParam));
  }
}