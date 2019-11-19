import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
} from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, DialogComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatInputModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
