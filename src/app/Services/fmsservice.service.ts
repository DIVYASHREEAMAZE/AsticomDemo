import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class FmsserviceService {

 // public fmsUrl = 'http://23.101.22.93/DigiFMSAPI';
  public fmsUrl = 'https://23.101.22.93/UBCITYAPI';
  //public fmsUrl = 'http://localhost:1807';
  URL:any;

  constructor(public http: HttpClient) { }

  public Userlogin = true;


  public getlanguagemaster() {

    return this.http.get<any[]>(this.fmsUrl + '/Language/getLanguages');
  }

  public getbuildingDashboardbyLanguageId(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/getBuildingDashboardbyLanguageID?ID=' + id);
  }
  public GetBuildingPlansLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetBuildingPlansLanguage?LanguageID=' + id);
  }
  public GetUpdateBuildingPlanLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetUpdateBuildingPlanLanguage?LanguageID=' + id);
  }
  public GetBuildingUnitLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetBuildingUnitLanguage?ID=' + id);
  }
  public GetCommunityHallLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetCommunityHallLanguage?ID=' + id);
  }
  public GetBookcommunityhallLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetBookcommunityhallLanguage?ID=' + id);
  }
  public GetPaymentsLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetPaymentsLanguage?ID=' + id);
  }

  public GetNewPaymentLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetNewPaymentLanguage?ID=' + id);
  }
  public GetParkingLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetParkingLanguage?ID=' + id);
  }

  public GetAddparkingslotLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetAddparkingslotLanguage?ID=' + id);
  }


  public GetDashboardLanguage(id:any) {
    return this.http.get<any[]>(this.fmsUrl + '/Language/GetDashboardLanguage?ID=' + id);
  }

  


}

