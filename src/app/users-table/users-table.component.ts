import { Component, Input } from '@angular/core';
import { DataContextService } from '../data-context.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})

export class UsersTableComponent {
  usersList: any
  p: number = 1;

  constructor(private dataContextService: DataContextService, private router: Router) {
    this.usersList = this.dataContextService.getData()
  }

  getCurrentNumber(i:number) {
    return 10 * (this.p - 1) + i + 1;
  }

  deleteUser(event: any) {
    let isDelete = confirm("Do you really want to delete this user?");
    if (isDelete) {
      this.dataContextService.deleteUser(event.target.id)
      this.usersList = this.dataContextService.getData()
    }

  }

  udateUser(event: any) {
    this.router.navigate(['/edit', event.target.id]);
  }

}