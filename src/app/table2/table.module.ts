import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
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
  imports: [
    CommonModule,
    TableRoutingModule,
    AgGridModule,
  ]
})
export class Table2Module { }
