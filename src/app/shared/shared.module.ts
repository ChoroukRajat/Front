import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InputFieldComponent,
    ButtonComponent,],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[
    InputFieldComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
