import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollingService {
 

  constructor( public http:HttpClient) { }

  // getPollingData(){
  //   return this.http.get("http://localhost:3000/data")
  // }
}
