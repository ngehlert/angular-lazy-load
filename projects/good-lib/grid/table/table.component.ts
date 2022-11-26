import { ColDef } from '@ag-grid-community/core';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() public rowData: Array<{ make: string, model: string, price: number }> = [];

  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
}
