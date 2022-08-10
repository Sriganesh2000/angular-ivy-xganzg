import { Injectable } from '@angular/core';
import { appConstant } from '../app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../products/product';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiurl = `${environment.apiEndpoint}${appConstant.apiRoute.products}`;
  constructor(private http: HttpClient) {}
  getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiurl);
  }
}
