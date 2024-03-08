import { Routes } from '@angular/router';
import path from 'path';
import { UserService } from './user/user.service';
import { UserListComponent } from './user/user-list/user-list.component';


export const routes: Routes = [
    {
        path: "", component: UserListComponent
    }
];
