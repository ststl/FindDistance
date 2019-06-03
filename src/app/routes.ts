
import { Route } from "@angular/compiler/src/core";

import { Component } from "@angular/core";

import { from } from "rxjs";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ShowDistanceComponent } from "./components/show-distance/show-distance.component";


export const routesConfiguration: Routes = [
 {  path: 'search',
    component:AppComponent},
    {  path: 'ShowDistance/:id',
    component:ShowDistanceComponent}

];

