import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  

  constructor(private http: HttpClient) { }
  ShowCities()  :any {
   
      return this.http.get("http://localhost:29545/api/Cities/GetListCities").toPromise().then(
        response => {
         return  response;
        })
      .catch(v => { return false; });   }
}
