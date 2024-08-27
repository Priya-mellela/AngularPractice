import { Directive, HostListener, ElementRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
  selector: '[appNumberFormat]',
  providers: [DecimalPipe],
})
export class NumberFormatDirective {
  constructor(private el: ElementRef, private decimalPipe: DecimalPipe) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const input = this.el.nativeElement;

    let value = input.value.replace(/[^0-9]/g, '');

    if (value) {
      input.value = this.decimalPipe.transform(value);
    } else {
      input.value = '';
    }
  }
}
