import {Component, OnInit} from '@angular/core';
import {CustomerService} from './Customer.Service'
import {Observable, observable, isObservable} from 'rxjs';
import { ICustomer } from './../Customer'

@Component({
    selector:'Customer',
    templateUrl:'Customer.Component.html',

})
export class CustomerComponent implements OnInit
{
   public Customers =[];
    constructor(private cusService : CustomerService){ }
    ngOnInit(){
        this.cusService.getCustomers()
        .subscribe(data=>{this.Customers=data;console.log(data)});
    }
  /*  Customers: any[] = [
        {Pid:'100', Name:'NareshReddy',ProductCost:'30000',PhoneNumber:8686069297,dob:'03/01/1994'},
        {Pid:'101', Name:'Mahesh',ProductCost:'20000',PhoneNumber:1234567890,dob:'03/03/1994'},
        {Pid:'102', Name:'LokeshReddy',ProductCost:'40000',PhoneNumber:5987654321,dob:'03/04/1994'},
        {Pid:'103', Name:'SureshReddy',ProductCost:'30000',PhoneNumber:6789054321,dob:'03/05/1994'},
        {Pid:'104', Name:'HimachalReddy',ProductCost:'20000',PhoneNumber:4987432145,dob:'03/06/1994'},
        {Pid:'105', Name:'Priya',ProductCost:'50000',PhoneNumber:3456784567,dob:'03/05/1994'},
        {Pid:'106', Name:'Nandhini',ProductCost:'30000',PhoneNumber:1234567890,dob:'03/07/1994'}
    ];*/
}