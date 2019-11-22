import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';

import { HeaderComponent, DialogComponent } from './components';

@NgModule({
  declarations: [HeaderComponent, DialogComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatInputModule],
  exports: [HeaderComponent]
})
export class SharedModule {}
