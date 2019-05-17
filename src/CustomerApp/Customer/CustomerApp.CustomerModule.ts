import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GridComponent } from "../Utility/CustomerApp.GridComponent";
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { BaseLogger, DbLogger, ConsoleLogger } from "../Utility/CustomerApp.Logger";
import { MyInterceptor } from '../Utility/Utility.HttpInterceptor'

//Decorator
@NgModule({
  declarations: [
    CustomerComponent, GridComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
  {
  provide: HTTP_INTERCEPTORS,
  useClass: MyInterceptor,
  multi : true,
  },
  //{provide : "1", useClass: DbLogger},
  //{provide : "2", useClass: ConsoleLogger},
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule {

}
