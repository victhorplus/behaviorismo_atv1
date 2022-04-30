import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss']
})
export class NavHomeComponent implements OnInit {
  home: boolean = true;
  team: boolean = false;
  content: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.scrollListener()
  }
  
  clearActive(){
    this.home = false;
    this.content = false;
    this.team = false;
  }
  
  scrollToSection(value: number){
    let sectionSize = window.innerHeight;
    window.scroll(0 , sectionSize * (value-1));
  }

  scrollListener(){
    let sectionSize = window.innerHeight;
    window.onscroll = (e: any) => {
      if(window.scrollY*1.5 <= sectionSize){
        this.clearActive();
        this.home = true;
      }
      else if(window.scrollY*1.5 >= sectionSize && window.scrollY*1.5 <= sectionSize*2){ 
        this.clearActive();
        this.team = true;
      }
      else if(window.scrollY*1.5 >= sectionSize*2){
        this.clearActive();
        this.content = true;
      }
    }
  }

}
