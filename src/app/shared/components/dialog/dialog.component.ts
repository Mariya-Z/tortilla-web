import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from 'src/app/core/services';
import { Router } from '@angular/router';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin() {
    const isLoggedIn = this.authService.login();
    this.dialogRef.close();
    if (isLoggedIn) {
      this.router.navigate(['/admin']);
    }

  }
}
