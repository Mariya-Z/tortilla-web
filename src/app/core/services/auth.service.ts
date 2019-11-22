import { Injectable } from '@angular/core';

// rxjs
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  public login(): boolean {
    // setTimeout(() => {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    // }, 500);
  // : Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => (this.isLoggedIn = val))
  //   );
  }

  public logout() {
    this.isLoggedIn = false;
  }
}
