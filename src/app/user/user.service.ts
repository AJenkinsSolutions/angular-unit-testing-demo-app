import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = [
    {id:1, name: 'john doe'},
    {id:2, name: 'jane doe'}
  ]

  constructor() { }

getUsers(){
  return of(this.user);
}

}

