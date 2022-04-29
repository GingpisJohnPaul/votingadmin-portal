import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  gc: string = 'assets/gc.png';
  gcvote: string = 'assets/gcvote.png';
  vote: string = 'assets/vote.svg';

  constructor() { }

  ngOnInit(): void {
  }

}

