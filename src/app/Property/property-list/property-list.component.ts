import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  Properties:Array<any>=[
    {
      "Id":1,
      "Name":"Dummy Text",
      "Type":"Rent",
      "Price":500
    },{
      "Id":2,
      "Name":"Dummy Text 2",
      "Type":"Buy",
      "Price":53300
    },{
      "Id":4,
      "Name":"Abcd Text",
      "Type":"Rent",
      "Price":343
    },{
      "Id":5,
      "Name":"Dummy isla Text",
      "Type":"Rent",
      "Price":5040
    },{
      "Id":6,
      "Name":"Dummy Text",
      "Type":"Rent",
      "Price":500
    }
]
}
