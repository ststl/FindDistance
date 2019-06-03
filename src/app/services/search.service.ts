import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 
 
  

  constructor(private http: HttpClient){ }
  AddSearch(citySourcekod: number, citydestinationkod: number):any  {
    return this.http.post("http://localhost:29545/api/Search/PostSearch",{source:citySourcekod,destination:citydestinationkod}).toPromise().then(
      response => {
       return  response;
      })
    .catch(v => { return false; });   } 

    ShowListPopularSearch():any {
  return this.http.get("http://localhost:29545/api/Search/GetPopularSearchs").toPromise().then(
      response => {
       return  response;
      })
    .catch(v => { return false; });} 
    ShowPopularSearch():any {
      return this.http.get("http://localhost:29545/api/Search/GetPopularSearch").toPromise().then(
        response => {
         return  response;
        })
      .catch(v => { return false; });  }
}

