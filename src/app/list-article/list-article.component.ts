import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../services/article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit{
  articles:any;
  constructor(private service: ArticleService, private router: Router) { }
  ngOnInit() {
    this.refreshListArticles();
  }

  deleteArticle(article:any){}

  updateArticle(article:any){}

  refreshListArticles() {
    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
  }

}
