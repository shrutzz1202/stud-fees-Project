import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ServiceService } from '../data/service.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-feesform',
  templateUrl: './feesform.component.html',
  styleUrl: './feesform.component.css',
  providers: [ConfirmationService, MessageService]
})
export class FeesformComponent implements OnInit {
  sidebarVisible = false;
  sidebarvisible = false;
  studFees: FormGroup;
  newentry: any = [];
  currentRowData: any = null;

  constructor(public FormBuilder: FormBuilder, public service: ServiceService, private messageService: MessageService, public confirmationService: ConfirmationService) {
    this.studFees = this.FormBuilder.group({
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      rollno: ['', [Validators.required, Validators.max(70), Validators.min(1)]],
      PaidFees: ['', [Validators.required, Validators.max(10000), Validators.min(1)]],
      PendingFees: [''],
    })
  }
  ngOnInit(): void {
    this.newentry = this.service.dataget()
  }

  feesform() {
    if (this.studFees.valid) {
      let newRollno = this.studFees.value.rollno;
      let existingRollno = this.newentry.map(entry => entry.rollno)
      if (existingRollno.includes(newRollno)) {
        alert('roll no is already exist!');
        return
      }
      let PaidFees = this.studFees.value.PaidFees;
  
      let EntryFees = 10000;
      let PendingFees = EntryFees - PaidFees;
      this.studFees.get('PendingFees').setValue(PendingFees)

      this.studFees.value
      this.studFees.value.PaidFees
      this.service.formdata(this.studFees.value)
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted Successfully!' });
      this.newentry = this.service.dataget()
      this.studFees.reset()
      this.sidebarVisible = false;
    
    }
    else {
      alert("Please Enter the Valid Field!")
    }
  }
  onPayIconClick(event) {
    this.sidebarvisible = true;
    this.currentRowData = event;
  }

  updatePendingValue(event) {
    console.log(event)
    this.currentRowData.PendingFees = this.currentRowData.PendingFees - event;
    this.currentRowData.PaidFees = this.currentRowData.PaidFees + event;
    const index = this.newentry.findIndex(entry => entry.rollno === this.currentRowData.rollno);
    if (index !== -1) {
      this.newentry[index] = this.currentRowData
      this.service.updateLocalStorage(this.newentry)
    }
    this.newentry = this.service.dataget()
    this.sidebarvisible = false  
  }

  Delete(entry: any) {
    this.confirmationService.confirm({
      message: 'Are you Sure you Want Delete this Entry?',
      header: 'Delete Entry!',
      icon: 'pi pi-info-circle',    
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      accept: () => {
        this.newentry = this.newentry.filter(item => item !== entry);
        this.service.updateLocalStorage(this.newentry)
        this.confirmationService.close();
      },
      reject : () => {
        this.confirmationService.close();
      }
    });

  }
  isBtnVisible(pendingFees:number):boolean{
      return pendingFees > 0
  }
  iconClose(){
    this.sidebarVisible=false;  
  }
}
