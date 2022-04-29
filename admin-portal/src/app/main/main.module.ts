import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModules } from "../modules/material.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ResultsComponent } from "./components/results/results.component";
import { MainRoutingModule } from "./main.routing.module";
import {MatCardHarness} from '@angular/material/card/testing';
import { CandidatesComponent } from "./components/candidates/candidates.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ResultsComponent,
    CandidatesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    MainRoutingModule,
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MainModule { }