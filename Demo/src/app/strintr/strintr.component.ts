import { Component } from '@angular/core';

@Component({
  selector: 'app-strintr',
  templateUrl: './strintr.component.html',
  styleUrls: ['./strintr.component.css']
})
export class StrintrComponent {
  public name="Priyanka"
  public Display():string
  {
    return "Marvellous"
  }

}
