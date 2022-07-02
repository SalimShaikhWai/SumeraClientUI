import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { City } from 'src/interfaces/city';
import { CityService } from '../Services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  id!:number;
  cities!:City[];
  cityObject:any;
  AddId=0;
  constructor(private cityService:CityService,private route:ActivatedRoute) {
   
   }

  ngOnInit(): void {

    this.id= this.route.snapshot.params['id'] || null ;
    console.log(this.id);
    if(this.id==0)
    {
      this.cityObject=new City();
      this.cityObject.id=0;
        console.log("coming bro"+this.cityObject.id);
    }
    else if(this.id>0)
    {
        this.cityService.getCityById(this.id).subscribe((data)=>{
          console.log(data);
            this.cityObject=data;
            console.log( this.cityObject);
        })
    }
    else{
      console.log("cityytt");
    this.cityService.getCities().subscribe((data:any)=>
    {
      console.log(data);
      this.cities=data;
      console.log(this.cities);
    })
  }

   }

   AddOrEditData(fromGoup:FormGroup)
   {
    console.log(fromGoup.value);
    if(fromGoup.value.id!=0){
    console.log("Edit service called");
         this.cityService.putCity(fromGoup.value).subscribe();  
    }
    else{
      console.log("add service called");
         this.cityService.postCity(fromGoup.value).subscribe();
    }
   }
   deleteData(){
    console.log("Delete data"+this.cityObject.id);
    this.cityService.deleteCity(this.cityObject.id).subscribe();
   }
   
  }


