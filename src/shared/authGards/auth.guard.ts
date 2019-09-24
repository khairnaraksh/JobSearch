import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  public loggedInuserDetails: any; 
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      this.loggedInuserDetails = JSON.parse(localStorage.getItem('currentUser'));
      if (this.loggedInuserDetails) {
          return true;
      }
  }
  this.router.navigate(['/Login']);
  return false;
  }
}
