import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailstoService {

  constructor(private http: HttpClient) {
    
   }
   detailsData() {
    
    return this.http.get("http://ingress-gateway.gaiansolutions.com/engagements-web/v1.0/6052f5347b20fd0006394a2d/engagements/list?paged=true&page=0&size=20&ownedOnly=true");
  }
}
