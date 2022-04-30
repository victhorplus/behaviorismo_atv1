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
  }

  activeSection(section: string){
    this.clearActive();
    switch(section){
      case 'home':
        this.home = true;
        this.scrollToSection(1);
        break;
      case 'team':
        this.team = true;
        this.scrollToSection(2);
        break;
      case 'content':
        this.content = true;
        this.scrollToSection(3);
        break;
    }
  }

  clearActive(){
    this.home = false;
    this.content = false;
    this.team = false;
  }
  
  scrollToSection(value: number){
    let sectionSize = window.innerHeight;
    console.log("Section", value);
    console.log("Section size", sectionSize);
    window.scroll(0 , sectionSize * (value-1));
  }

}
