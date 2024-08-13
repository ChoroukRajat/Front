import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  inputValue: string = '';
  
  onInputValueChange(newValue: string) {
    this.inputValue = newValue;
    console.log('Entered value:', newValue);  // Log the value to the console
  }
  onButtonClick(){
    console.log("submitted");
  }
}
