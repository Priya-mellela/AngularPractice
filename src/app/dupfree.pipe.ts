import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dupfree',
})
export class DupfreePipe implements PipeTransform {
  transform(value: string[]): string[] {
    if (!value) return [];
    return Array.from(new Set(value));
  }
}
