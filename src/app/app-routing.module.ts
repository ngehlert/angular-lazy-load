import {NgModule, Type} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () => import ('./table/table.module')
      .then((module: {TableModule: Type<any>}) => module.TableModule),
  },
  {
    path: 'table2',
    loadChildren: () => import ('./table2/table.module')
      .then((module: {Table2Module: Type<any>}) => module.Table2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
