import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from 'src/interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
baseUrl=environment.baseApiUrl;
city!:City;
  constructor(private httpClient:HttpClient) { }

getCities()
{
  console.log("cities called");
  return this.httpClient.get(this.baseUrl+"api/city");
}
getCityById(id:number)
{
  console.log("id come"+id);
  return this.httpClient.get(this.baseUrl+"api/city/"+id);
}

putCity(city:City)
{
  console.log("Put come"+city.id);
  return this.httpClient.put(this.baseUrl+"api/city/"+city.id,city);
}
deleteCity(id:number)
{
  console.log("delete service called");
  return this.httpClient.delete(this.baseUrl+"api/city/"+id);
}
postCity(city:City)
{
  console.log("add services come");
  return this.httpClient.post(this.baseUrl+"api/city",city);
}

}

