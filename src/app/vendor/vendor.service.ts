import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

const url: string = "http://localhost:58585/api/vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  list(): Observable<Vendor[]> {
    return this.http.get('${url}') as Observable<Vendor[]>;
  }
  get(id): Observable<Vendor> {
    return this.http.get('${url}/${id}') as Observable<Vendor>;
  }
  create(user: Vendor): Observable<Vendor> {
    return this.http.post('${url}', user) as Observable<Vendor>;
  }
  change(user: Vendor): Observable<any> {
    return this.http.put('${url}/${user.id}', user) as Observable<any>;
  }
  remove(user: Vendor): Observable<Vendor> {
    return this.http.put('${url}/${user.id}', user) as Observable<Vendor>;
  }


  constructor(
    private http: HttpClient) { }
}
