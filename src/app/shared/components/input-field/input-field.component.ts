import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
}
}
