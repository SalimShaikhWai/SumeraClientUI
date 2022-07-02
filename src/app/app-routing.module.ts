import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [

{path:"country",component:CountryComponent},
{path:"city",component:CityComponent},
//{path:"city/:operation",component:CityComponent},
{path:"city/:id",component:CityComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
