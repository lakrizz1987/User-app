import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataContextService } from '../data-context.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})

export class UserInputComponent {
  ages: number[] = [];
  firstNameInvalid = false;
  lastNameInvalid = false;
  professionInvalid = false;
  fieldEmpty = false;

  constructor(private router: Router, private dataContextService: DataContextService) {
    this.ages = Array.from({ length: 53 }, (_, i) => i + 18);

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
  @Output() inputEmiter = new EventEmitter();
  
  onEmptyField(value:boolean){
    this.inputEmiter.emit(value)
  }

  submitForm(event: any) {
    event.preventDefault();
    const formData: any = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    if (!userData['first-name'] || !userData['last-name'] || !userData['profession'] || !userData['gender'] || !userData['age']) {
      //this.fieldEmpty = true;
      //setTimeout(() => this.fieldEmpty = false, 3000)
      this.onEmptyField(true)
      return
    }

    const newUser = { id: Math.random(), firstName: userData['first-name'], lastName: userData['last-name'], profession: userData['profession'], gender: userData['gender'], age: userData['age'] };
    this.dataContextService.addUser(newUser)
    this.router.navigate(['/']);
  }


  onRedirect() {
    this.router.navigate(['/']);
  }
}
