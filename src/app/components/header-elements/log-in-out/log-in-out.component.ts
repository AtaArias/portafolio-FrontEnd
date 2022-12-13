import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-log-in-out',
  templateUrl: './log-in-out.component.html',
  styleUrls: ['./log-in-out.component.css']
})
export class LogInOutComponent {
 faCoffee =faCoffee;
 faSignIn = faSignIn
}
