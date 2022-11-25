import { ColDef } from '@ag-grid-community/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'BMW', model: 'Celica', price: 35000 },
    { make: 'Audi', model: 'Mondeo', price: 32000 },
    { make: 'Ferrari', model: 'Boxster', price: 72000 }
  ];
}