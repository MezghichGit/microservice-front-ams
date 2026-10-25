import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Provider} from "../models/Provider";


@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private Url= environment.ProviderUrl + 'providers'
  urlProvider =  'http://127.0.0.1:9191/providers/';
  provider: any;


  constructor(private Http: HttpClient) { }

  listProviders() {
    return this.Http.get(this.urlProvider);
  }


  createProvider(myform:any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(this.urlProvider , this.provider);
  }

  updateProvider(myObj:any) {
    return this.Http.put(this.urlProvider + '/' + myObj['id'], myObj);
  }

  deleteProvider(myObj:any) {

    return this.Http.delete(this.urlProvider + '/' + myObj['id'], myObj)
  }

  getProvider(id:any) {

    return this.Http.get<Provider>(this.urlProvider + '/' + id)
  }



}
