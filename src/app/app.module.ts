import { BrowserModule } from '@angular/platform-browser';
import { routesConfiguration } from './routes';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowDistanceComponent } from './components/show-distance/show-distance.component';
import { ListOfPopularSearchesComponent } from './components/list-of-popular-searches/list-of-popular-searches.component';
import { DistanceBetweenCitiesComponent } from './components/distance-between-cities/distance-between-cities.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { RouterModule, Router } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    declarations: [
    AppComponent,
    ShowDistanceComponent,
    ListOfPopularSearchesComponent,
    DistanceBetweenCitiesComponent
   

    // MatSelectModule,MatOptionModule,MatFormFieldModule
  ],
  imports: [
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
   RouterModule.forRoot(routesConfiguration),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
