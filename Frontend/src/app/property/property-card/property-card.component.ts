import { Component } from '@angular/core';



@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  //styles: ['h1 {font-weight:normal;}']
  styleUrls: ['property-card.component.css']
}

)
export class ProperyCardComponent{
  Property :any={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":1200
  }
}
