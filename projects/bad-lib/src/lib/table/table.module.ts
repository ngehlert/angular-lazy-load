import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {AgGridModule} from "@ag-grid-community/angular";
import {ModuleRegistry} from "@ag-grid-community/core";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
]);

@NgModule({
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    AgGridModule,
  ]
})
export class TableModule { }
