import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';
import { DropDownData } from 'src/interfaces/dropdownData';
import {  ICity } from 'src/interfaces/Icity';

@Injectable({
  providedIn: 'root'
})
export class CityService {
baseUrl=environment.baseApiUrl;
city!:ICity;
  constructor(private httpClient:HttpClient) { }


  getCountries():Observable<DropDownData[]>{
    console.log("Country service called");
  return this.httpClient.get<DropDownData[]>(this.baseUrl+"api/Country/countryDataToDropDown");
  }

getCities():Observable<ICity[]>
{
  console.log("cities called");
  return this.httpClient.get<ICity[]>(this.baseUrl+"api/city");
}
getCityById(id:number):Observable<ICity>
{
  console.log("id come"+id);
  return  this.httpClient.get<ICity>(this.baseUrl+"api/city/"+id);
}

putCity(city:ICity)
{
  console.log("Put come"+city.id);
  return this.httpClient.put(this.baseUrl+"api/city/"+city.id,city);
}
deleteCity(id:number)
{
  console.log("delete service called");
  return this.httpClient.delete(this.baseUrl+"api/city/"+id);
}
postCity(city:ICity)
{
  console.log("add services come");
  return this.httpClient.post(this.baseUrl+"api/city",city);
}

}

