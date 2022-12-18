import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private apiUrl = "http://localhost:5000/"

  constructor(
    private http:HttpClient
  ) { }

  //TODO: Add interfaces

  getSkills(){
    return this.http.get(this.apiUrl + "Skills")
  }

  deleteSkill(skill: any){
    const url = `${this.apiUrl + "Skills"}/${skill.id}`;

    return this.http.delete(url)
  }

  updateTaskReminder(skill: any){
    const url = `${this.apiUrl + "Skills"}/${skill.id}`;

    return this.http.put(url, skill, httpOptions)
  }

  addSkill(skill: any){
    return this.http.post(this.apiUrl + "Skills", skill, httpOptions)
  }
}
