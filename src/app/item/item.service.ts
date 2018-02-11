import { Injectable } from '@angular/core';
import { Item } from "./item";
import { ItemDetail } from "./ItemDetail";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ItemService {
  private apiUrl = 'http://localhost:8080/api/items';
  private apiUrlDetails = 'http://localhost:8080/api/itemDetails';

  constructor(private http: Http) { }

  findAll(): Observable<Item[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findAllDetails(): Observable<Item[]>  {
    return this.http.get(this.apiUrlDetails)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findAllByName(): Observable<Item[]>  {
    return this.http.get(this.apiUrl + '/name')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  findById(id: number): Observable<Item> {
    return this.http.get(this.apiUrl + '/' + id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveItem(item: Item): Observable<Item> {
    return this.http.post(this.apiUrl, item)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteItemById(id: number): Observable<boolean> {
    console.log("deleting item with id " + id);
    return this.http.delete(this.apiUrl + '/' + id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put(this.apiUrl, item)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
