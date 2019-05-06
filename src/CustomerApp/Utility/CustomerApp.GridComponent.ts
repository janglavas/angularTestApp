import {Component,
        Input,
        Output,
        EventEmitter} from "@angular/core"

//Decorator
@Component({
  selector: "test-grid",
  templateUrl: "./CustomerApp.Grid.html"
})


export class GridComponent {
  // collection data for column names
      gridColumns: Array<Object> = new Array<Object>();
  // Collection data for grid data
      gridData: Array<Object> = new Array<Object>();

  @Input("grid-columns")
  set setGridColumns (_gridColumns: Array<Object>){
  this.gridColumns = _gridColumns;
}
  @Input("grid-data")
  set setGridData (_gridData: Array<Object>){
  this.gridData = _gridData;
}

@Output("grid-selected")
eventemitter: EventEmitter<Object> = new EventEmitter<Object>();
//send selected object of component ui
  SelectGrid(_selected:Object){
    this.eventemitter.emit(_selected);

  }

}
