import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'twoSlices';
  removeLoading:boolean=false
  ngOnInit(){
    setTimeout(() => {
      this.removeLoading=true
    }, 2000);
  }
  
}
