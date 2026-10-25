import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';
import {Provider} from "../models/Provider";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  provider: any = {

    name: '',
    email: '',
    address: '',
  };
  constructor(private service: ProviderService, private router: Router) { }
  ngOnInit() {
  }
  createProvider(myform: any) {

    this.service.createProvider(myform).subscribe(response => {
      //console.log(response);
      this.router.navigate(['providers']);
    });
  }
}
