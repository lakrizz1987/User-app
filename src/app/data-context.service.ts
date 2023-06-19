import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataContextService {

  private dataSubject = new BehaviorSubject<any>([
    { id: Math.random(), firstName: 'Ivaylo', lastName: 'Ignatov', profession: 'Front-end dev', gender: 'male', age: 35 },
    { id: Math.random(), firstName: 'Kiril', lastName: 'Kostov', profession: 'Back-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Pesho', lastName: 'Marinov', profession: 'Manager', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Gosho', lastName: 'Ivanov', profession: 'Back-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Filip', lastName: 'Petkov', profession: 'Back-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Ivan', lastName: 'Kostov', profession: 'Manager', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Valentin', lastName: 'Kovachev', profession: 'Back-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Maria', lastName: 'Petrova', profession: 'HR specialist', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Lea', lastName: 'Ivanova', profession: 'Back-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Luke', lastName: 'Skywalker', profession: 'Manager', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Jon', lastName: 'Smith', profession: 'Front-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Victoria', lastName: 'Kamarasheva', profession: 'Back-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Anton', lastName: 'Valentinov', profession: 'Back-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Yavor', lastName: 'Antonov', profession: 'Front-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Boqn', lastName: 'Boqnov', profession: 'Team lead', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Eli', lastName: 'Popova', profession: 'Back-end dev', gender: 'male', age: 25 },
    { id: Math.random(), firstName: 'Gerrgana', lastName: 'Stoqnova', profession: 'HR specialist', gender: 'male', age: 25 },
  ]);
  
  data$ = this.dataSubject.asObservable();

  updateData(data: any) {
    this.dataSubject.next(data);
  }

  getOneUser(id: any) {
    const user = this.dataSubject.value.find((user: any) => user.id == id);
    return user
  }

  getData() {
    return this.dataSubject.value
  }

  addUser(user: any) {
    this.dataSubject.value.push(user)
  }

  deleteUser(id: any) {
    const user = this.dataSubject.value.filter((user: any) => user.id == id);
    const index = this.dataSubject.value.indexOf(user[0]);
    const users = this.dataSubject.value;
    users.splice(index, 1);
  }
}
