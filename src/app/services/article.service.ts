import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment.prod";
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlArticles =  'http://127.0.0.1:9191/articles/';
  article: any;

  constructor(private Http: HttpClient) { }

  listArticles() {
    return this.Http.get(this.urlArticles);
  }


  createArticle(myform:any) {
    //console.log(myform.value);
    this.article = {
      'name': myform.value.articlelabel,
      'price': myform.value.articlePrice,
      'providerId': myform.value.providerId
    }
    return this.Http.post(this.urlArticles, this.article);
  }

}
