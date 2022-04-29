import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';


const MatModules = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDividerModule,
]

@NgModule({
  declarations: [],
  imports: [ MatModules ],
  exports: [ MatModules ], schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModules { }