import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogintoService {
  headerOptions:any
  iamHeaderOption: any
  
  constructor(private http: HttpClient) {
    this.headerOptions = new HttpHeaders();
    this.headerOptions = this.headerOptions.set('Content-Type', 'application/x-www-form-urlencoded')
   }
   clientData(data:any) {
     debugger
     const url = "http://ingress-gateway.gaiansolutions.com/iam-service/oauth/token"
     let headers = new HttpHeaders({
       'Content-Type':'application/x-www-form-urlencoded',
     }); 
     let options = {headers: headers}
    return this.http.post(url, data, options)
 }
}
