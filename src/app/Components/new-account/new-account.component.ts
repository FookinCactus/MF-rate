import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  urls=[] as any;
  onselect(e: any) {
    if(e.target.files) {
      for (let i = 0; i < File.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);
        }
      }
    }
  }

}
