import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'class-demo';
  uname:string="Amit Kumar";
  designation:string="Manager";
  age:number=30;
  location:string="Pune";

  courses :string[]=["MEAN STack", "MERN Stack", "Full STack"];
  users:any[]=[
    {uname:"John Doe", designation:"Developer", age:25, location:"New York"},
    {uname:"Jane Smith", designation:"Designer", age:28, location:"Los Angeles"},
    {uname:"Tom Brown", designation:"Tester", age:32, location:"Chicago"}
  ]
}
