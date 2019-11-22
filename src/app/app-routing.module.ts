import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineListComponent } from './admin/components';
import { HomeComponent } from './layout/components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: MachineListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
