import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  // getting the parentdata from parent to display
  @Input('parentData') public name ;
  constructor() { }

  ngOnInit() {
  }



}
