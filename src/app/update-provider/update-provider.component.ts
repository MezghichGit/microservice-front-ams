import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

  public id!: any;
  public providerToUpdate: any;
  public name!: string;
  public email!: string;
  public address!: string;


  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    //1)Récupération de l'id d'un provider
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

   //2)Charger tout le provider de la base selon son id
    this.providerToUpdate = this.service.getProvider(this.id).subscribe(
      (response:any) => {
        //console.log(response);
        this.name = response["name"]
        this.email = response["email"];
        this.address = response["address"];

      }
    );
    // this.initFormUpdateProvider(myform);
  }

  updateProvider() {

    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.address,
      'id': this.id
    }
    this.service.updateProvider(this.providerToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['providers']);
      }
    );

  }
}
