import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.component.html',
  styleUrls: ['./your-profile.component.css']
})
export class YourProfileComponent implements OnInit {

  hide = false;
  phide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
