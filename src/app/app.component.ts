import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  error: boolean = false;

  setError(value:boolean){
    this.error = value;
  }

  setErrorTrue(componentReference:any){
    if(!componentReference.inputEmiter){
      return
    }
    componentReference.inputEmiter.subscribe((data:any) => {
      this.error = data
   })
  }
}
