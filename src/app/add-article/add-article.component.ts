import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../services/article.service';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{


  providers: any;
  idProvider:any;
  constructor(private service: ArticleService, private router: Router,
    private providerService: ProviderService,) { }
  ngOnInit() {
    this.providerService.listProviders().subscribe(
      data => { this.providers = data}
    );
  }
  createArticle(myform: any) {

    this.service.createArticle(myform).subscribe(response => {
      //console.log(response);
      this.router.navigate(['articles']);
    });


  }
}
