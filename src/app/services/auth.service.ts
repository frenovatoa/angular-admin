import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected http: HttpClient
  ) { }


  login(data: any): Observable<any> { // An Observable is a stream of data that can be processed using the .subscribe() method.
    return this.http.post(
      `${environment.api}/login`,
      data,
      { withCredentials: true }
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${environment.api}/register`, data);
  }
}
