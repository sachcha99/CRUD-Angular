import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CreateCountryComponent } from './country/create-country/create-country.component';
import { UpdateCountryComponent } from './country/update-country/update-country.component';

const routes: Routes = [

  {path:'',redirectTo:'country',pathMatch:'full'},
  {path:'add', component:CreateCountryComponent},
  {path:'countries', component:CountryListComponent},
  {path:'update', component:UpdateCountryComponent},
  {path:'update/:id', component:UpdateCountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
