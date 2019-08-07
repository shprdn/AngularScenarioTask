import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //method to call when clicked
  logMessage(value)
  {
    //print on console
    console.log(value);
  }

}
