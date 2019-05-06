import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { BaseLogger, DbLogger, ConsoleLogger } from "../Utility/CustomerApp.Logger";

// dynamic collection
var providerscoll : any = [];

//http call from server
providerscoll.push({ provide : "1", useClass : DbLogger });
providerscoll.push({ provide : "2", useClass : ConsoleLogger });
providerscoll.push({ provide : BaseLogger, useClass : ConsoleLogger });

//Decorator
@NgModule({
declarations: [
   MasterPageComponent, HomeComponent
  ],
imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule
  ],
providers: [providerscoll],

bootstrap: [MasterPageComponent],
})
export class MainModule {

}
