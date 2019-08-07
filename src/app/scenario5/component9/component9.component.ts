import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component9',
  templateUrl: './component9.component.html',
  styleUrls: ['./component9.component.css']
})
export class Component9Component implements OnInit {

  
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(value)
  {
    this.childEvent.emit(value);
    
  }

}
