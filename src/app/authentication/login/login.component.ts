import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/shared/services/authentication/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public LoginError: string = '';

  constructor(public router: Router,
    private loginService: LoginService) { }

  public loginModel: any = {};
  onLoggedin = (loginModel) => {
    this.LoginError = '';
    this.loginService.loginDetails().subscribe((response) => {
      if (response && response[0]) {
        if (loginModel['Email'].toString().toLowerCase() === response[0]['username'] &&
          loginModel['Password'].toString().toLowerCase() === response[0]['password']) {
          this.router.navigate(['/Job-Details']);
          localStorage.setItem('currentUser', JSON.stringify({ username: response[0]['username'], token: response[0]['password'] }));
        } else {
          this.LoginError = "**Password Mismatch**";
        }
      }
    });
  }

}
