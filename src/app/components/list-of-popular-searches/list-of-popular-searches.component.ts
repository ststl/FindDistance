import { Component, OnInit } from '@angular/core';
import { P } from '@angular/core/src/render3';
import { SearchService } from 'src/app/services/search.service';
import { Search } from 'src/app/classes/search';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-list-of-popular-searches',
  templateUrl: './list-of-popular-searches.component.html',
  styleUrls: ['./list-of-popular-searches.component.css']
})
export class ListOfPopularSearchesComponent implements OnInit {

  constructor(private search:SearchService,private cities:CitiesService) { }
  listCities;
  listPopularSearch;
  ngOnInit() {
    this.ShowCities();
  }
 
ShowListPopularSearch()
{
this.search.ShowListPopularSearch().then(res => {
  this.listPopularSearch = res;
  this.listPopularSearch.forEach(element => {
    element['NameSourceCity'] =this.listCities && this.listCities.find(search => search.id == element.KodCitySource)?this.listCities.find(search => search.id == element.KodCitySource).NameCity:'';
    element['NameDestinationCity'] =this.listCities && this.listCities.find(search => search.id == element.KodCityDestinision)?this.listCities.find(search => search.id == element.KodCityDestinision).NameCity:'';
});})
}
 ShowCities() {
this.cities.ShowCities() .then(res => {
  this.listCities = res;
this.ShowListPopularSearch();
})
} 
}

