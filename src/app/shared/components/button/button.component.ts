import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() btnClass: string = '';
  @Input() text: string = '';

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
