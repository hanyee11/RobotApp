import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S2tModalPage } from './s2t-modal.page';

const routes: Routes = [
  {
    path: '',
    component: S2tModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S2tModalPageRoutingModule {}
