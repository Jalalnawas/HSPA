import { Component } from "@angular/core";

@Component({
  selector: 'app-Property-Card',
templateUrl:'Property-card.component.html',
styleUrls:['Property-card.component.css']
})
export class PropertyCardComponent{
Property:any={
  "Id":1,
  "Name":"Dummy Text",
  "Type":"Rent",
  "Price":500
}
}
