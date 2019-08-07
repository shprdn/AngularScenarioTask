import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.css']
})
export class Component6Component implements OnInit {

  //sending the data from child to parent component
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // method declaration
  fireEvent(value){
      this.childEvent.emit(value);
  }
}
