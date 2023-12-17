import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mini:any;
  constructor() { }

  ngOnInit(): void {
  }
  public getvalues(val: any) {
    this.mini = val;
  }

}
