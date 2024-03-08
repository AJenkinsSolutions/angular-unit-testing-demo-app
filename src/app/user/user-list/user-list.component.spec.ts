import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { trigger } from '@angular/animations';
import { By } from '@angular/platform-browser';


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

  it('should retrieve users from the UserService on init', () => {
    //To start the ngonit lifecycle hook in the unit test. update all the data bindings 
    fixture.detectChanges();
    //ASSERTIONS
    expect(userServiceSpy).toHaveBeenCalled();
  })

  it('should retreive usres from the userservice when the refresh button is clicked', () => {
    //This will call the ngOnInIt LifeCycle Hook
    fixture.detectChanges();


    //No information about prior calls
    userServiceSpy.calls.reset();

    //Simulating ther button being pressed
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null)
    
    expect(userServiceSpy).toHaveBeenCalled();
  
  })

});
