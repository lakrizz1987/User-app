import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent {

  @Output() popUpEmiter = new EventEmitter()

  onClose(value:boolean) {
    this.popUpEmiter.emit(value)
  }
}
