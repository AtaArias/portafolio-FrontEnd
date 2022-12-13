import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  courses: string[] = ['Unsl', 'Harvard CS50', 'Physics', 'Programadores 4.0', 'Argentina Programa', 'CS50 for game dev']
}
