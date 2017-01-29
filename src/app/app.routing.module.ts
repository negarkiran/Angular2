import { DatatableComponent } from './datatable/datatable.component';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
    {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'/datatable',component:DatatableComponent}
    ]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RoutingModule]
})
export class RoutingModule{

}