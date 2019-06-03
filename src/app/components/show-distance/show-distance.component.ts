import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Search } from 'src/app/classes/search';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-show-distance',
  templateUrl: './show-distance.component.html',
  styleUrls: ['./show-distance.component.css']
})
export class ShowDistanceComponent implements OnInit {
  distance: number;
  PopularSearch:Search=new Search();
  listCities: any;
  constructor(private route:ActivatedRoute,
  private router:Router,private search:SearchService,private cities:CitiesService) { 
  this.route.params.subscribe((params:Params) => {
  this.distance = params.id;
  });}
  ngOnInit() {  
    this.ShowCities();
  }
  ShowCities() {
    this.cities.ShowCities().then(res => {
      this.listCities = res;
    this.ShowPopularSearch();
    })
    } 
  close()
  {
    this.router.navigate(['/search']);
  }
  ShowPopularSearch()
{
this.search.ShowPopularSearch().then(res => {
this.PopularSearch = res;
debugger;
this.PopularSearch['NameSourceCity'] =this.listCities && this.listCities.find(search => search.id == this.PopularSearch.KodCitySource)?this.listCities.find(search => search.id == this.PopularSearch.KodCitySource).NameCity:'';
this.PopularSearch['NameDestinationCity'] =this.listCities && this.listCities.find(search => search.id == this.PopularSearch.KodCityDestinision)?this.listCities.find(search => search.id == this.PopularSearch.KodCityDestinision).NameCity:'';
});
}
}
