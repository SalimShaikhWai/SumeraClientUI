import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { DropDownData } from 'src/interfaces/dropdownData';
import { ICity } from 'src/interfaces/Icity';


import { CityService } from '../Services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cityForm!:FormGroup;
  dropdown!:DropDownData[];
  flag:any;
  cities!:ICity[];
  cityObject=new ICity();
 // AddId=0;
  constructor(private fb:FormBuilder,private cityService:CityService,private route:ActivatedRoute,private router:Router) {

   }

  ngOnInit(): void {
    this.cityForm=this.fb.group({
      id:0,
      name:['',Validators.required],
      countryRefId:[,Validators.required]
    });



   var id= this.route.snapshot.params['id'] || null ;
    console.log(id);
    
     if(id>0)
    { this.flag="EDIT";
        this.getCountriesForDropdown();
      
        this.cityService.getCityById(id).subscribe(
          {
            next:(res)=>{
              this.cityObject=res;
            }
          }
        );
    }
    else{
      this.listOfData();
  }

   }

   listOfData()
   {
    this.flag="LIST";
          console.log("cityytt");
        this.cityService.getCities().subscribe((data:any)=>
        {
          console.log(data);
          this.cities=data;
          console.log(this.cities);
        });
   }

getCountriesForDropdown()
{
  console.log("Dropdown Called");
  this.cityService.getCountries().subscribe({
    next:(data)=>{     
      this.dropdown=data;    
    }
  });
  
}

   showAddForm(){
    this.cityObject=new ICity();
    this.flag="ADD";
    this.getCountriesForDropdown();
   }

   addOrEditData(fromGoup:FormGroup)
   {
    console.log(fromGoup.value);
    if(this.flag=="EDIT"){
        console.log("Edit service called");
            this.cityService.putCity(fromGoup.value).subscribe(
            {
              next:()=>{           
                this.router.navigate(['city']);
              }
            }
            );  
         }
    else{
         console.log("add service called");
         this.cityService.postCity(fromGoup.value).subscribe(
          ()=>  this.router.navigate(['city']),                                     
         );
        
         }   
   }


   AddOrEditData2(){

   }






   deleteData(id:number){
    console.log("Delete data"+this.cityObject.id);
    this.cityService.deleteCity(this.cityObject.id).subscribe({
      next:()=>{
        this.router.navigate(['city']);
      }
    });   
   }  
  }


