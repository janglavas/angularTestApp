import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';

import { BaseLogger } from "../Utility/CustomerApp.Logger";

@Component({
  templateUrl: './CustomerApp.CustomerView.html'

})
export class CustomerComponent {
  title = 'TestApp';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  Logobject : BaseLogger = null;
  constructor(_injector : Injector){
    this.Logobject = _injector.get("1");
    this.Logobject.Log();
  }
  SelectCustomer(_selected:Customer){
    this.CustomerModel = _selected;
  }

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); //clear UI
  }
  hasError(typeofvalidator:string,controlname:string) : boolean{
    return this.CustomerModel
    .formCustomerGroup
    .controls[controlname]
    .hasError(typeofvalidator);
  }
}
