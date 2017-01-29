import { DataFilterPipe } from './data-filter.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular2-datatable';

import { DatatableComponent } from './datatable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    HttpModule
  ],
  declarations: [DatatableComponent,DataFilterPipe],
  exports:[DatatableComponent]
})
export class DatatableModule { }
