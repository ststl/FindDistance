import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { Cities2 } from 'src/app/classes/Cities2';
import { SearchService } from 'src/app/services/search.service';
import { Search } from 'src/app/classes/search';
import { Route } from '@angular/compiler/src/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-distance-between-cities',
  templateUrl: './distance-between-cities.component.html',
  styleUrls: ['./distance-between-cities.component.css']
})
export class DistanceBetweenCitiesComponent implements OnInit {

  constructor(private Cities:CitiesService, private search:SearchService,private router:Router) { }
citySourcekod:number;
citydestinationkod:number;
distance:number;
listCities:Cities2[];
  ngOnInit() {
    this.ShowCities();
  }
  ShowCities() {
   this.Cities.ShowCities().then(res => {
    this.listCities = res;
 });
  }
  ShowDistance()
  { 
    this.router.navigate(["/ShowDistance/"+this.distance]);
  }
  GetDistancesource(event)
  {
this.citySourcekod=event.id; 
 }
  GetDistancedestination(event)
{
  debugger;
  this.citydestinationkod=event.id;
}

GetDistance() {
  if(this.citySourcekod!=null&&this.citydestinationkod!=null ) 
  {
  this.search.AddSearch(this.citySourcekod,this.citydestinationkod).then(res => {
    this.distance = res;
    this.ShowDistance();
  });

  }
}}
