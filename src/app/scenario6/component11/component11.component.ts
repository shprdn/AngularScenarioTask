import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component11',
  templateUrl: './component11.component.html',
  styleUrls: ['./component11.component.css']
})
export class Component11Component implements OnInit {

  constructor() { }

  //sending the data from child to parent component
  @Output() public childEvent = new EventEmitter();
  ngOnInit() {
  }

  //method declaration
  messageLog(value)
  {
    this.childEvent.emit(value);
  }
}
