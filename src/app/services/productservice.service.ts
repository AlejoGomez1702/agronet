import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../components/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  urlApi = 'https://api.agrolibre.xyz/api/v1/';

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get<any>(this.urlApi+'products');
  }

  getProduct(id){
    return this.http.get<any>(this.urlApi+'products/'+id);
  }
  addProduct(product: Product){
    // return this.http.post();
  }

}
