import { Component } from '@angular/core';

import { BaseLogger } from "../Utility/CustomerApp.Logger";


@Component({
  templateUrl: './CustomerApp.HomeView.html'

})
export class HomeComponent {
  Logobject : BaseLogger = null;
    constructor(_logger : BaseLogger){
      this.Logobject = _logger;
      this.Logobject.Log();
    }
}
