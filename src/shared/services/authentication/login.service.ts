import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public loginDetails = () => {
    let url = "./../../../assets/user.json"
    return this.http.get(url).pipe(map(x => x));
  }
}
