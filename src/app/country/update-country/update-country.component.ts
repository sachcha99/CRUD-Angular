import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {

  country = new Country();
  //submitted=false;

  constructor( private router: Router,private countryService:CountryService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    let id =parseInt( this.activatedRoute.snapshot.paramMap.get('id'));
    this.countryService.fetchCountryByIdFromRemote(id).subscribe(
      data=>
      {
        console.log("data received");
        this.country = data;
      },
    error=>console.log("error")

    )
  }

  updateSubmit(){
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
