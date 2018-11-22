import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICustomer} from './../Customer';
import {Observable} from 'rxjs';

@Injectable()
export class CustomerService{

    private _url:string="assets/data/Customers.json";
    constructor(private http:HttpClient){}
getCustomers() {
    return this.http.get<ICustomer[]>(this._url);
}
} 