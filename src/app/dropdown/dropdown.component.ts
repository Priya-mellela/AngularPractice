import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() stateOptions: string[] = [];
  @Output() stateSelected: EventEmitter<string> = new EventEmitter<string>();

  onStateChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.stateSelected.emit(selectElement.value);
  }
}
