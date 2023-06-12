import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public batch="Angular"
  public fees:number=18500
  public  a:any
  constructor()
  {
    this.a=this.displayDetails()
  }
  
  displayDetails()

  {
    return "This is web Development Batch"
  }

}
