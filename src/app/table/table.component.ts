import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnInfo, DataItem } from '../app.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() columns: ColumnInfo[] = [];
  @Input() data: DataItem[] = [];

  @Output() itemClicked: EventEmitter<DataItem> = new EventEmitter<DataItem>();

  onRowClicked(item: DataItem) {
    console.log('Emitting an event to parent');
    this.itemClicked.emit(item);
  }
}
