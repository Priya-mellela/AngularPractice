export interface DataItem {
  [key: string]: string; // This allows dynamic keys, all values must be strings
}

export interface ColumnInfo {
  name: string;
  field: string;
}
