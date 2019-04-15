import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Address} from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService
{

  constructor(private httpClient:HttpClient) { }

  getAddresses(url: string)
  {
    return this.httpClient.get<Address[]>(url);
  }

  createAddress(url: string, address: Address)
  {
    return this.httpClient.post<Address>(url,address);
  }
}
