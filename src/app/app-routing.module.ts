import {NgModule, Type} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',

    loadChildren: () => import ('./table/table.module')
      .then((module: {TableModule: Type<any>}) => module.TableModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
