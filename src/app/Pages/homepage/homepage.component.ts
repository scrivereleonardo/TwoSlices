import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

}
