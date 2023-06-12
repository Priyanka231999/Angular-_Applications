import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
  public mycolor="orange"
  public isset=false
  public myclass="red"
  public data="___"
  public myaction()
  {
    this.data="Submit button clicked..."

  }
  public myactionnew(value:any)
  {
   console.log(value)

  }


}
