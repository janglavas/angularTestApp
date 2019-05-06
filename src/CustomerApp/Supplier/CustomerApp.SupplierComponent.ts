import { Component } from '@angular/core';

import { BaseLogger } from "../Utility/CustomerApp.Logger";

//Decorator
@Component({
  templateUrl: './CustomerApp.SupplierView.html'

})
export class SupplierComponent {
  Logobject : BaseLogger = null;
  constructor(_logger : BaseLogger){
    this.Logobject = _logger;
      this.Logobject.Log();
    }
}
