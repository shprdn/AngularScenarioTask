import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html',
  styleUrls: ['./component8.component.css']
})
export class Component8Component implements OnInit {

  public message ="";
  @Output() childEvent = new EventEmitter();
  constructor() { }

  
  ngOnInit() {
  }

  redirectChild($value)
  {
    // this.message=value;
    this.childEvent.emit($value);
  }

}
