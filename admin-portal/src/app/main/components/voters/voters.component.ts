import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss']
})

export class VotersComponent implements OnInit {
  
  icon: string = 'assets/overview-icon.png';
  line: string = 'assets/line.svg';
  icon1: string = 'assets/Frame 2.svg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
