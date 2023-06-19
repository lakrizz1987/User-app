import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: UsersTableComponent },
  { path: 'add', component: UserInputComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: '**', pathMatch: 'full',component: NotFoundComponent },
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
