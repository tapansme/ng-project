import { Component } from '@angular/core';

@Component({
  selector: 'app-formcalculate',
  standalone: false,
  templateUrl: './formcalculate.component.html',
  styleUrl: './formcalculate.component.css'
})
export class FormcalculateComponent {

   v1: number = 0;
   v2: number = 0;
   v3: number = 0;
   v4: number = 0;

  add() 
  {
    this.v4 = this.v1 + this.v2+ this.v3;
  }


}
