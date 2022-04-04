import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private routes: Router) { } 

  msg;

  ngOnInit(): void {
    
  }

  check(uname: string, p: string) {
    // service will return true or false
    var output = this.authService.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/blog']);
    }
    else {
      this.msg = 'Invalid username or password'
    }
  }
  
}
