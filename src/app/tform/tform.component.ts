import { Component } from '@angular/core';

@Component({
  selector: 'app-tform',
  standalone: false,
  templateUrl: './tform.component.html',
  styleUrl: './tform.component.css'
})
export class TformComponent {
  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
  
  }
}
