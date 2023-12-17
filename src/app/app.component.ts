import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './shared/sidebar/sidebar/sidebar.component';
import { Router } from '@angular/router';
import { FmsserviceService } from './Services/fmsservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digifmsweb';

  hasNetworkConnection: boolean = false;
  hasInternetAccess: boolean = false;
  status: string | undefined;
  showNotification: boolean | undefined;
  dispyList: any = [];
  hover: any;

  count: any
  @ViewChild(SidebarComponent, { static: false })
  SidebarComponent: SidebarComponent | undefined;
  constructor(
    public router: Router,
    public FmsserviceService: FmsserviceService
  ) {

  }

  login: any;
  chatcount: any;
  myname: any;
  staffID: any;
  pagename: any;
  showsidebar: any=0;
  time: any;
  hh: any;
  mm: any;
  ampm: any;
  username: any;
  officelogo: any;
  temp1: any;
  ss: any;

  initail: any;
  notificationslist: any;
  notificationCount: any;
  notificationslistforCount: any;
  uniquelist: any;
  notificationslist1: any;
  notificationCount1: any;
  ProfilePhoto: any;
  log: any;
  companyid: any;
  ngOnInit(): void {

    debugger
    this.getScreenResolution();

  

   
    this.staffID = localStorage.getItem('staffid');
    this.temp1 = localStorage.getItem('temp');
    this.login = localStorage.getItem('roledid');
    this.username = localStorage.getItem('UserName');
    this.companyid = sessionStorage.getItem('companyid');
    this.log = localStorage.getItem('log');

    // setInterval(() => {
    //   //  
    //   var time = new Date().getTime();
    // time.setHours(time.getHours() + 2 );
    //  time.setMinutes(time.getMinutes() + 150);
    // this.time = new Date(time + 2.5 * 60 * 60 * 1000);
    // this.time = new Date(time);

    // setInterval(() => {
    //   this.FmsserviceService.GetCurrentphtime().subscribe((res: any) => {
    //     //  
    //     let temp: any = res;
    //     this.hh = temp[0].hh;
    //     this.mm = temp[0].mm;
    //     this.ss = temp[0].ss;
    //     this.ampm = temp[0].ampm;
    //   });
    //   var time = new Date();
    //   this.time = time.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', hour12: true });
    //    let temp: any = this.time.split(':');
    //  this.hh = temp[0];
    //  let temp1: any = this.time.split(':')[1].split(" ");
    //     this.mm = temp1[0];
    //    this.ampm = temp1[1];
    // }, 10000);

    if (sessionStorage.getItem('roledid') == undefined) {
      this.showsidebar = 0;
    } else {
      this.showsidebar = 1;
    }
    this.GetNotification();
    //this.FmsserviceService.showblur=false;
    // this.FmsserviceService.GetMyDetailsByStaffID(this.staffID).subscribe(
    //   (res: any) => {
    //     //debugger
    //     let temp: any = res;
    //     this.myname = temp[0].name;
    //     this.initail = this.myname.charAt(0);
    //     this.ProfilePhoto = temp[0].profilePhoto;
    //   }
    // );
  }

  showMobileView: boolean | undefined;
  getScreenResolution() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w >= 340 && w < 500) {
      this.showMobileView = true;
    } else {
      this.showMobileView = false;
    }
  }



  public GetNotification() {

    // this.FmsserviceService.GetNotification(this.staffID).subscribe(
    //   (data: any) => {

    //     this.notificationslist = data;
    //     this.count = this.notificationslist.length

    //     for (let i = 0; i <= this.notificationslist.length; i++) {
    //       if (this.dispyList.length < 3) {
    //         this.dispyList.push(this.notificationslist[i]);
    //       } else {
    //       }
    //     }
    //     this.notificationslist1 = data.filter(
    //       (x: { seen: number }) => x.seen == null
    //     );
    //     this.showNotification = true;
    //     this.notificationCount1 = this.notificationslist1.length;
    //   }
    // );
   
  }

  public ClearNotification() {
    //  
    // this.FmsserviceService.SeenNotificationByID(
    //   Number(this.staffID)
    // ).subscribe((_data: any) => {
    //   //  
    // });

    Swal.fire('All Notifications marked as read');
    location.reload();
    this.GetNotification();
  }

  public onActivate(event: any) {
    window.scroll(0, 0);
  }
  show: any;

  public changecolor(ID: any) {
    //  
    var entity = {
      ID: ID,
    };
    // this.FmsserviceService.UpdateNotificationSeen(entity).subscribe(
    //   (_data: any) => {
    //   }
    // );
    location.reload();
  }

  loader: any;
  public logout() {
    //  
    this.loader = true;
    localStorage.setItem('roledid', '0');
    sessionStorage.setItem('roledid', '0');
    this.router.navigate(['/Login']).then(() => {
      document.getElementById('dropdownConfig')?.click();
      location.reload();
      localStorage.clear();
      sessionStorage.clear();
      this.showNotification = false;
    });
  }

  public accountsetting() {
    //  
    this.router.navigate(['/Shared/MyAccountSetting']);
  }

  public Clearstorge() {
    sessionStorage.setItem('temp', '0');
    location.reload();
  }
  link() {

    // this.router.navigate(['/HR/AddressDetailsWizard']);
    location.href = '#/HR/AddressDetailsWizard';
    this.loader = false;
  }
  sidenav = true;
  getless(sidenav: any) {
    if (sidenav == true) {
      (document.getElementById('mySidebar') as HTMLInputElement).style.width =
        '75px';
      //  (document.getElementById("mySidebar") as HTMLInputElement).style.paddingLeft = "15px";
      this.sidenav = false;
    } else {
      (document.getElementById('mySidebar') as HTMLInputElement).style.width =
        '100%';
      this.sidenav = true;
    }
    this.SidebarComponent?.getvalues(sidenav);
  }
  getHeaderLabel(sasa: any) {

    this.pagename = localStorage.getItem('Pagename');
  }

  Profile() {

    localStorage.setItem('Pagename', 'My Profile');
    //this.router.navigate(['/Employee/MyProfiletabs', this.staffID]);



    sessionStorage.setItem('staffFormID', this.staffID);
    this.router.navigate(['/StaffCreation/StaffCreationTabs', this.staffID]);
   // this.FmsserviceService.saveData('value');
    this.loader = false;
    document.getElementById('dropdownConfig')?.click();
  }

  Helpcentre() {

    localStorage.setItem('Pagename', 'Help');
    this.router.navigate(['/Admin/Help']);
    //this.FmsserviceService.saveData('value');
    this.loader = false;
    document.getElementById('dropdownConfig')?.click();
  }

  settings() { }

  changeicon: any;
  highlight(value: any) {
    this.changeicon = value;
  }
  hoverFunction(e: any) {
    this.hover = e;
  }

  public navigate(event: any) {

    this.loader = true;
    if (event == 'Loan Request') {
      this.companyid = sessionStorage.getItem('companyid');
      if (this.companyid == 1007) {
        this.router.navigate(['HR/ApproverTeamLoans']);

        localStorage.setItem('Pagename', '');
        localStorage.setItem('highlightmenu', 'Loan Request');
      ////  this.FmsserviceService.saveData('value');
        this.loader = false;
      }
      else {
        this.router.navigate(['Employee/Appliedloans']);
        localStorage.setItem('Pagename', '');
        localStorage.setItem('highlightmenu', 'Loan Request');
      ////  this.FmsserviceService.saveData('value');
        this.loader = false;
      }
    }
    else if (event == 'Attendance Request') {

      if (this.login == 6) {
        localStorage.setItem('Pagename', 'Attendance Details');
        localStorage.setItem('highlightmenu', 'Attendance Request');
      } else {
        localStorage.setItem('Pagename', '');
        localStorage.setItem('highlightmenu', 'Attendance Request');
      }
      this.router.navigate(['HR/AttendanceDetails']);
     // this.FmsserviceService.saveData('value');
      this.loader = false;
    }
    else if (event == 'Attendance Correction' || event == 'Attendance Correction Request') {

      if (this.login == 6) {
        this.router.navigate(['/Employee/AttendanceCorrection']);
        localStorage.setItem('Pagename', 'Attendance Correction');
        //this.FmsserviceService.saveData('value');
        localStorage.setItem('highlightmenu', 'Attendance Correction');
        this.loader = false;
      } else {
        this.router.navigate(['/Manager/TeamAttendanceCorrection']);
        localStorage.setItem('Pagename', '');
        localStorage.setItem('highlightmenu', 'Attendance Correction');
       // this.FmsserviceService.saveData('value');
        this.loader = false;
      }
      // this.router.navigate(['HR/AttendanceCorrection']);
      // this.FmsserviceService.saveData('value');
      // this.loader = false;
    }

    else if (event == 'Leave Request') {
      if (this.login == 6) {
        localStorage.setItem('Pagename', 'Leave request');
        localStorage.setItem('highlightmenu', '1');
        this.router.navigate(['Employee/LeaveListDashboard']);
      } else if (this.login == 2) {
        localStorage.setItem('Pagename', '');
        localStorage.setItem('highlightmenu', '1');
        this.router.navigate(['Manager/MyTeamLeaveDetails']);
      }
      else {
        localStorage.setItem('Pagename', '');
        localStorage.setItem('highlightmenu', '1');
       // this.router.navigate(['HR/HRLeaveRequest']);
      }

     // this.FmsserviceService.saveData('value');
      localStorage.setItem('highlightmenu', 'Leave Request');
      this.loader = false;
    }

    else if (event == 'Over Time Request' || event == 'OT Request') {
      localStorage.setItem('Pagename', 'Overtime Details');
      this.router.navigate(['HR/MyOverTimeDetails']);
    ////  this.FmsserviceService.saveData('value');
      localStorage.setItem('highlightmenu', 'Over Time Request');
      this.loader = false;
    }

    else if (
      event == 'Onboarding Request' ||
      event == 'Onboarding Initiation Checklist'
    ) {
      localStorage.setItem('Pagename', 'Onboarding Details');
      this.router.navigate(['HR/OnboardingInitiationDash']);
     // this.FmsserviceService.saveData('value');
      localStorage.setItem('highlightmenu', 'Onboarding Request');
      this.loader = false;
    }

    else if (
      event == 'Exit Formality Request' ||
      event == 'Resignation Request'
    ) {
      this.router.navigate(['Manager/ExitFormalityDash']);
      localStorage.setItem('Pagename', 'Exit Formality');
    //  this.FmsserviceService.saveData('value');
      localStorage.setItem('highlightmenu', 'Exit Formality Request');
      this.loader = false;
    }

    else if (event == 'Employee Data Change Request') {
      if (this.login == 9) {
        this.router.navigate(['HR/TeamEmployeChangeRequestDetails']);
        localStorage.setItem('Pagename', '');
      //  this.FmsserviceService.saveData('value');
        localStorage.setItem('highlightmenu', 'Employee Data Change Request');
        this.loader = false;
      }
      else {
        this.router.navigate(['/HR/EmployeeChangeRequestDashboard']);
        localStorage.setItem('Pagename', 'Employee Change Request');
      //  this.FmsserviceService.saveData('value');
        localStorage.setItem('highlightmenu', 'Employee Data Change Request');
        this.loader = false;
      }

    }
    else if (event == 'Transfer Request') {
      if (this.login == 9) {
        this.router.navigate(['/HR/EmployeeTransfer']);
        localStorage.setItem('Pagename', '');
      //  this.FmsserviceService.saveData('value');
        localStorage.setItem('highlightmenu', 'Transfer Request');
        this.loader = false;
      }
      else {
        this.router.navigate(['/HR/EmployeeTransfer']);
        localStorage.setItem('Pagename', 'Employee Transfer');
      //  this.FmsserviceService.saveData('value');
        localStorage.setItem('highlightmenu', 'Transfer Request');
        this.loader = false;
      }

    }
    // else if (event == 'Attendance Correction' ) {
    //   this.router.navigate(['/Employee/AttendanceCorrection']);
    //   localStorage.setItem('Pagename', 'Attendance Correction');
    // //  this.FmsserviceService.saveData('value');
    //   this.loader = false;
    // }
    else {
      this.ngOnInit();
      this.loader = false;
    }
    this.loader = false;
  }

  public notification() {

    localStorage.setItem('Pagename', 'Notifications');
    this.router.navigate(['/Notification']);
    document.getElementById('dropdownConfig1')?.click();
  //  this.FmsserviceService.saveData('value');
  }

  openNav() {
    (document.getElementById("mySidepanelMob") as HTMLInputElement).style.width = "230px";
  }

  closeNav() {
    (document.getElementById("mySidepanelMob") as HTMLInputElement).style.width = "0";
  }
}
