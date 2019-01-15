import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list-tasks/list.component';
import {CreateProductComponent} from './create-task/create-product.component';
import {UpdateProductComponent} from './update-task/update-product.component';

const routes: Routes = [
  {path: 'tasks', component: ListComponent},
  {path: 'tasks/create', component: CreateProductComponent},
  {path: 'tasks/:id/update', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
