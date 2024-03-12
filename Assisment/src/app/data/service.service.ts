import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  formdata(feedata:any){
    if(JSON.parse(localStorage.getItem('feesData'))){
    let a= JSON.parse(localStorage.getItem('feesData'));
    a.push(feedata);
    localStorage.setItem('feesData',JSON.stringify(a));
  }else{
    let i=[];
    i.push(feedata);
    localStorage.setItem('feesData',JSON.stringify(i))
   
  }
  }
updateLocalStorage(data:any){
  let a= JSON.parse(localStorage.getItem('feesData'));
    a.push(data);
  localStorage.setItem('feesData',JSON.stringify(data));
}
  dataget(){
     let arr=(localStorage.getItem('feesData'));
       if(arr == null){
         return [];
       } else{
        return JSON.parse(arr);
       }
  }
}

