import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {
  country = new Country();
  //submitted=false;

  constructor( private router: Router,private countryService:CountryService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //this.submitted=true;
    this.countryService.addCountryToRemote(this.country).subscribe(

      data=>
        {
          console.log("data added succesfully");
          this.router.navigate(['/countries']);
        },
      error=>console.log("error")
      //this.country=new Country();
    )
  }

}
