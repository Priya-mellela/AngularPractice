import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';
import { ColumnInfo, DataItem } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hello World !';
  name = '';
  imageUrl =
    'https://thumbs.dreamstime.com/b/angular-logo-editorial-illustrative-white-background-angular-logo-editorial-illustrative-white-background-eps-download-208329119.jpg';
  stateOptions = [
    'Telangana',
    'Karnataka',
    'Maharashtra',
    'Tamil Nadu',
    'Kerala',
  ];
  selectedState = '';

  tableColumns: ColumnInfo[] = [
    {
      name: 'Name',
      field: 'name',
    },
    {
      name: 'Address',
      field: 'address',
    },
    {
      name: 'Gender',
      field: 'gender',
    },
    {
      name: 'Phone',
      field: 'phone',
    },
  ];

  items: DataItem[] = [
    { name: 'Alex', address: 'US', gender: 'M', phone: '1234567890' },
    { name: 'Peter', address: 'China', gender: 'M', phone: '2343224234' },
    { name: 'John', address: 'Australia', gender: 'M', phone: '32423432434' },
  ];

  constructor() {}

  // confirm(): void {
  //   alert('hi ' + this.name + ' thanks for confirming');
  // }

  onItemClicked(item: DataItem): void {
    console.log('Data received in parent ', item);
  }
  onStateSelected(stateOption: string): void {
    this.selectedState = stateOption;
    console.log('Selected state: ', this.selectedState);
  }
  confirm(): void {
    alert(
      'hi ' +
        this.name +
        ' from ' +
        this.selectedState +
        ', thanks for confirming'
    );
  }
}
