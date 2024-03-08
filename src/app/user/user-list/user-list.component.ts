import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  
  users: any[] = [];
  
  constructor(private service: UserService){}
  
  ngOnInit(): void {

    this.refreshUsers();
   
  }

  refreshUsers(): void{
    this.service.getUsers().subscribe(obj => {
      this.users = obj; 
      console.log(this.users)
    })
  }

}
