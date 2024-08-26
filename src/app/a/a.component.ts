import { Component, EventEmitter, Output } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss',
})
export class AComponent {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private testService: TestService) {}

  onButtonClick() {
    this.testService.onButtonClick();
    this.clicked.emit(true);
  }
}
