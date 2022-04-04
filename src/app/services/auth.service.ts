import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // check username and password
  checkusernameandpassword(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "admin123") {
      localStorage.setItem('username', "admin");
      return true;
    }
    else {
      return false;
    }
  }
}
