import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { 
    console.log('Data service is working.')
  }

  private baseURL: string = 'https://jsonplaceholder.typicode.com/';
  public request(epoint: string, params: string, body: any): any {
    return this.http.post(this.baseURL + epoint + params, body);
  }
}
