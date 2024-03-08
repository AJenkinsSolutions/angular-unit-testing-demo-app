import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';



@NgModule({
  declarations: [
    
  
  ],
  imports: [
    BrowserModule,
    AppComponent,
    UserListComponent

  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }