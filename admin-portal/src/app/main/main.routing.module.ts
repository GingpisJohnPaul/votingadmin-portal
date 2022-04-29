import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ResultsComponent } from "./components/results/results.component";
import { VotersComponent } from "./components/voters/voters.component";
import { CandidatesComponent } from "./components/candidates/candidates.component";
import {MatCardHarness} from '@angular/material/card/testing';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'voters', component: VotersComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }