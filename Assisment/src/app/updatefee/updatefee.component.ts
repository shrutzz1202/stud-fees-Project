import { Component,OnInit,Input,Output, EventEmitter} from '@angular/core';
import { ServiceService } from '../data/service.service';


@Component({
  selector: 'app-updatefee',
  templateUrl: './updatefee.component.html',
  styleUrl: './updatefee.component.css'
})
export class UpdatefeeComponent implements OnInit{
  
  @Output() updatePendingFees:EventEmitter<any>=new EventEmitter();
  @Input() rowData:any = null;
  fieldValue:any;

  
  sidebarVisible=false;

constructor(public service:ServiceService){

}

ngOnInit(): void { 
}
submitPendingFees(){ 
  if(this.rowData && this.rowData.PendingFees >= this.fieldValue) {
  this.updatePendingFees.emit(this.fieldValue);
  this.fieldValue = null;
  }
  else {
    alert("Your Input is Invalid!")
  }
  
  
}
}
