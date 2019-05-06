import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GridComponent } from "../Utility/CustomerApp.GridComponent";
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { BaseLogger, DbLogger, ConsoleLogger } from "../Utility/CustomerApp.Logger";

//Decorator
@NgModule({
  declarations: [
    CustomerComponent, GridComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  {
  provide: BaseLogger,
  useClass: ConsoleLogger
  },
  {provide : "1", useClass: DbLogger},
  {provide : "2", useClass: ConsoleLogger},
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule {

}
