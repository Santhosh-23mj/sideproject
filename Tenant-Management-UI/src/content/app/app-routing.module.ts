import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseOwnerComponent } from './house-owner/house-owner.component';

const routes: Routes = [
  { path: 'house-owner', component: HouseOwnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
