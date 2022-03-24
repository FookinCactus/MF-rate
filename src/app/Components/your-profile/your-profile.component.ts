import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.component.html',
  styleUrls: ['./your-profile.component.css']
})
export class YourProfileComponent implements OnInit {

  info: string[] = ['Ben Boswell', 'Ben@s56.net', 'NotRealPass445']

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
