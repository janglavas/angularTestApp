import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import { BaseLogger, DbLogger, ConsoleLogger } from "../Utility/CustomerApp.Logger";


@NgModule({
  declarations: [
   SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,FormsModule
  ],
  providers: [{
    provide: BaseLogger,
    useClass: ConsoleLogger
  }],
  bootstrap: [SupplierComponent]
})
export class SupplierModule {

}
