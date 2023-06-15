import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-Property-Card',
templateUrl:'Property-card.component.html',
styleUrls:['Property-card.component.css']
})
export class PropertyCardComponent{
@Input() Property:any
}
