import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataContextService } from '../data-context.service';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  ages: number[] = [];

  userId: any = '';
  firstName = '';
  lastName = '';
  profession = '';
  age = '';
  gender = '';

  firstNameInvalid = false;
  lastNameInvalid = false;
  professionInvalid = false;
  fieldEmpty = false;

  constructor(private router: Router, private dataContextService: DataContextService, private route: ActivatedRoute) {
    this.ages = Array.from({ length: 53 }, (_, i) => i + 18);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      
      const user = this.dataContextService.getOneUser(this.userId)

      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.profession = user.profession;
      this.age = user.age;
      this.gender = user.gender;
    });
  }

  onRedirect() {
    this.router.navigate(['/']);
  }

  firstNameValidator(event: any) {
    const pattern = /\b[a-zA-Z]{3,}\b/;
    let text = event.target.value;
    const regEx = new RegExp(pattern);


    if (!regEx.test(text)) {
      this.firstNameInvalid = true;
    } else {
      this.firstNameInvalid = false;
    }
  }

  lastNameValidator(event: any) {
    const pattern = /\b[a-zA-Z]{3,}\b/;
    let text = event.target.value;
    const regEx = new RegExp(pattern);


    if (!regEx.test(text)) {
      this.lastNameInvalid = true;
    } else {
      this.lastNameInvalid = false;
    }
  }

  professionValidator(event: any) {
    const pattern = /\b[a-zA-Z]{3,}\b/;
    let text = event.target.value;
    const regEx = new RegExp(pattern);


    if (!regEx.test(text)) {
      this.professionInvalid = true;
    } else {
      this.professionInvalid = false;
    }
  }

  onEdit() {
    const userData = {
      id: this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      profession: this.profession,
      gender: this.gender,
      age: this.age
    }

    if (!userData['firstName'] || !userData['lastName'] || !userData['profession'] || !userData['gender'] || !userData['age']) {
      this.fieldEmpty = true;
      setTimeout(() => this.fieldEmpty = false, 3000)
      return
    }

    const oldUsers = this.dataContextService.getData();

    const oldUser = oldUsers.find((user: any) => user.id == userData.id);
    const index = oldUsers.indexOf(oldUser);

    oldUsers.splice(index,1,userData);
    this.dataContextService.updateData(oldUsers);

    this.router.navigate(['/'])
  }
}
