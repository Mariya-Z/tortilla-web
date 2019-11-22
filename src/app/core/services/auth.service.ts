import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;

  constructor() {}

  public logIn() {
    this.isLoggedIn = true;
  }

  public logOut() {
    this.isLoggedIn = false;
  }
}
