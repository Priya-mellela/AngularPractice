import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrl: './b.component.scss',
  providers: [TestService],
})
export class BComponent implements OnInit {
  buttonClicked: boolean = false;
  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.buttonClicked$.subscribe(
      (buttonClicked) => (this.buttonClicked = buttonClicked)
    );
  }
}
