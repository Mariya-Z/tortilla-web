import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineListComponent } from './components';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [MachineListComponent],
  imports: [CommonModule, MatTableModule]
})
export class AdminModule {}
