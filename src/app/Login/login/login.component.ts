import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../../Services/fmsservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public languages:any;
  public username:any;
  public userpassword:any;
  public fmsurl:any;
  public FilteredAssetList:any;
  public UserNameVis: boolean=false;
  public PasswordVis: boolean=false;
  public LoginButtonVis: boolean=false;
  public LanguageVis: boolean=false;
  public SubmitButtonVis: boolean=false;
  public Enitity = {
    companyID: 9999
  }
  constructor(public fmsservice: FmsserviceService, private router: Router,  public datepipe: DatePipe) { }
  public ChangeEntity = {
    NewPassword: "",
    Password: ""
  }
  ngOnInit() {

    localStorage.removeItem('fmsurl');
    this.SubmitButtonVis = true;
    debugger;
    // let jjj:any = document.getElementsByClassName('navbardivstyles');
    // jjj[0]['style'].display = 'none';
    //document.getElementsByClassName('navbardivstyles')[0].setAttribute('style','none');
    localStorage.setItem('selectedLanguageID', '1');
    
  }






  public GetLoginType(evn:any) {
    debugger;
    localStorage.setItem('LoginTypeID', evn.target.value);
  }


  onLogin() {
    debugger;
    if (this.username == "" || this.userpassword == "") {
      Swal.fire('Please Enter Username and Password');
    }
    else {
      let LoginTypeID = localStorage.getItem("LoginTypeID");
      if (LoginTypeID == '1' || LoginTypeID == '2') {
        location.href = '#/Building';
        location.reload();
      }

    }


  }








  getlanguages() {
    this.fmsservice.getlanguagemaster().subscribe(
      res => {
        this.languages = res;
      }

    )
  }

  selectLanguage(evn:any) {
    localStorage.setItem('selectedLanguageID', evn.target.value);
  }



}
