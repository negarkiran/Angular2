import { GlusterComponent } from './gluster/gluster.component';
import { WeaveComponent } from './weave/weave.component';
import { ContainersComponent } from './containers/containers.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ContainersModule } from './containers/containers.module';
import { GlusterModule } from './gluster/gluster.module';
import { WeaveModule } from './weave/weave.module';
import { RoutingModule } from './app.routing.module';
import { DatatableModule } from './datatable/datatable.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {DropdownModule} from 'ng2-dropdown';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes=[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'datatable',component:DatatableComponent},
    {path:'containers',component:ContainersComponent},
    {path:'weave',component:WeaveComponent},
    {path:'gluster',component:GlusterComponent}
    ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatatableModule,
    DropdownModule,
    WeaveModule,
    GlusterModule,
    ContainersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
