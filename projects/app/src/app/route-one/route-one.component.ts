import { Component } from '@angular/core';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
})
export class RouteOneComponent {
  public rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];
}
