import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: string[] = [
    "JS Html and CSS", 
    "2d game dev Lua and Love2d", 
    "Data analisis with R and Rstudio", 
    "Angular", 
    "Higher math understanding", 
    "Understanding of Physics",
    "Great problem solving"
  ]
}
