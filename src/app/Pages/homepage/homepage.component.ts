import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  loadedWait:boolean=false
  ngOnInit(): void {

    Aos.init()
  
    setTimeout(() => {
      this.loadedWait=true
    }, 500);
  }

}
