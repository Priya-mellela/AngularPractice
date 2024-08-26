import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private buttonClicked: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  buttonClicked$ = this.buttonClicked.asObservable();

  constructor() {}

  onButtonClick() {
    console.log('button clicked');
    this.buttonClicked.next(true);
  }
}
