import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { LaptopEditFormComponent } from './laptop-edit-form/laptop-edit-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/laptops', pathMatch: 'full' },
  { path: 'laptops', component: LaptopListComponent },
  { path: 'laptops/add', component: LaptopFormComponent },
  { path: 'laptops/:id', component: LaptopDetailsComponent },
  { path: 'laptops/:id/edit', component: LaptopEditFormComponent },
  { path: 'laptops/:id/edit', component: LaptopEditFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
