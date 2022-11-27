import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteOneRoutingModule } from './route-one-routing.module';
import { RouteOneComponent } from './route-one.component';
import { TableModule } from 'bad-lib';

@NgModule({
  declarations: [
    RouteOneComponent
  ],
  imports: [
    CommonModule,
    RouteOneRoutingModule,
    TableModule,
  ]
})
export class RouteOneModule { }
