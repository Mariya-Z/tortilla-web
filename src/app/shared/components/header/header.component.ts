import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public clickOnTitle: EventEmitter<string> = new EventEmitter<
    string
  >();
  constructor(public dialog: MatDialog) {}

  onTitleClick() {
    this.clickOnTitle.emit('home');
  }

  onClick() {
    this.dialog.open(DialogComponent, { width: '250px' });
    console.log('log in');
  }
}
