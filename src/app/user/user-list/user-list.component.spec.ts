import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [UserService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      {id: 1, name: "John Doe"},
      {id: 2, name: "Jane Doe"}
    ]))
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
