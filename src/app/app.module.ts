import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCountryComponent } from './country/create-country/create-country.component';
import { UpdateCountryComponent } from './country/update-country/update-country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryService } from './service/country.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateCountryComponent,
    UpdateCountryComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
