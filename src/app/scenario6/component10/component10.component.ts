import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component10',
  templateUrl: './component10.component.html',
  styleUrls: ['./component10.component.css']
})
export class Component10Component implements OnInit {

  //sending the data to one of its child component
  @Output() childEvent = new EventEmitter();
  public message="";

  constructor() { }

  ngOnInit() {
  }

  // method declaration
  onEvent($value)
  {
    this.childEvent.emit($value);
    this.message=$value;
  }
}
