import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-one',
    loadChildren: () => import ('./route-one/route-one.module')
      .then((module: {RouteOneModule: Type<unknown>}) => module.RouteOneModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
