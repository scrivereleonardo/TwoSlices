import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  volumeoff=false

  constructor() { }
  audio: any = new Audio('../../../assets/overtaken_onepiece.m4a');

  playAudio() {
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
  }

  loadedWait: boolean = false
  ngOnInit(): void {

    Aos.init()





    setTimeout(() => {
      this.loadedWait = true
    }, 500);
  }

}
