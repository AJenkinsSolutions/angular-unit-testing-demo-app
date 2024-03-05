import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
    //Mock the user service

    let service: UserService; 

    //Runs before each test
    beforeEach(()=> {
      //Will create a new int
      TestBed.configureTestingModule({});
      service = TestBed.inject(UserService);

    })

    //Should be a new service
    it('should be created', ()=> {

      expect(service).toBeTruthy();

    })

    //Should get usert array
    it('should ger users', ()=>{
      service.getUsers().subscribe(users => {
        expect(users.length).toBeGreaterThan(0);
      })
    })






});
