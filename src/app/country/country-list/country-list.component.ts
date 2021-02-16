import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries:Array<Country> = [];

  constructor(private countryService:CountryService, private router:Router) { }

  ngOnInit(): void {
          this.countryService.fetchCountryListFromRemote().subscribe(
            data=>console.log("response received"),
            error=>console.log("exception occured")
          )

    this.getCountries();
  }
  getCountries() {
    this.countryService.fetchCountryListFromRemote().subscribe(
      data => this.countries = data, error => console.log("Exception occurred 1"),
    )
  }
  isEmpty()
  {
    if (this.countries == null)
    {
      return true;
    }
    else { return false; }
  }

  goToUpdateCountry(id: number) {
    console.log("id: "+ id);
    this.router.navigate(['/update', id]);
  }
 deleteCountry(id: number) {
    return this.countryService.deleteCountryByIdFromRemote(id).subscribe(
      data=> {
        console.debug("deleted succesfully");
        
    this.router.navigate(['/countries']);
      },
      
      error=> console.log("Exception occured")

    )
  }




 /*
  deleteCountry(id: number) {
    if (confirm('Are you sure ?'))
  return this.countryService.deleteCountryByIdFromRemote(id).subscribe(
    success =>{
      ("Product deleted succesfully");
    },
    error=> {console.log("Exception occured 2"); this.getCountries()}
   )
  }
*/
}
