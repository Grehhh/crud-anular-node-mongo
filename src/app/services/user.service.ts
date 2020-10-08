import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/api';

  public getAll(): Observable<any> {
    return this.http.get(this.url + '/contacts');
  }

  public getOne(contact_id): Observable<any> {
    return this.http.get(this.url + '/contacts/' + contact_id)
  }
}
