import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S2tModalPageRoutingModule } from './s2t-modal-routing.module';

import { S2tModalPage } from './s2t-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S2tModalPageRoutingModule
  ],
  declarations: [S2tModalPage]
})
export class S2tModalPageModule {}
