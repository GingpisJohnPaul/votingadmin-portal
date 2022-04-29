import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  line: string = 'assets/line.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
