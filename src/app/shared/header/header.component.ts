import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  onClick() {
    this.dialog.open(DialogComponent, {width: '250px'});
    console.log('log in');
  }
}
