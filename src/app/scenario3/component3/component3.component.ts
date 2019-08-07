import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  // declaring the variable as message
  public message = "";
  constructor() { }

  ngOnInit() {
  }
  // method to be called when clicked on submit button
  messageLog(value)
  {
    this.message=value;
    // printing the message on the console
    console.log('message');
  }

}
