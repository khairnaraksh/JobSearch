import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService {

  constructor(private http: HttpClient) { }

  public jobDetails = () => {
    let url = " https://nut-case.s3.amazonaws.com/jobs.json"
    return this.http.get(url).pipe(map(x => x));
  }
}
