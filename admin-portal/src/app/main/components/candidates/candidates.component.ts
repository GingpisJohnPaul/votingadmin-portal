import { Component, OnInit } from '@angular/core';
import { MaterialModules } from "../../../modules/material.module";
import {MatCardHarness} from '@angular/material/card/testing';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  line: string = 'assets/line2.svg';
  

  ngOnInit(): void{
  }
}