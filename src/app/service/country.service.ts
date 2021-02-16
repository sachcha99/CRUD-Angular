import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountryService {


  constructor(private _http: HttpClient) { }
  //private baseUrl: string = 'http://localhost:8080/api/countries';

  fetchCountryListFromRemote():Observable<any>{
  
    return this._http.get<any>("http://localhost:8080/rest/v2/getcountrylist");

  }

  addCountryToRemote(country:Country):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/rest/v2/addcountry",country);
  }

  updateCountryToRemote(country: Country): Observable<any>{
    return this._http.post<any>('http://localhost:8080/rest/v2/editproduct',country);
  }

  fetchCountryByIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8080/rest/v2/getcountrybyid/'+id);
  }
  deleteCountryByIdFromRemote(id: number): Observable<any> {
    window.location.reload();
    return this._http.delete<any>('http://localhost:8080/rest/v2/deletecountrybyid/'+id);
  }
/*
  getCountries() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getCountryById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createCountry(country: Country): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, country);
  }

  updateCountry(id: number, country: Country): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + country.id, country);
  }

  deleteCountry(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }*/
}
