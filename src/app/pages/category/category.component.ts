import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
   // it store the fetch new article
  news: any[] = [];
   // it tell the loading state is proper working or not
  loading = true;
  category: string = '';

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const newCategory = params.get('name') || 'general';
      if (newCategory !== this.category) {
        this.category = newCategory;
        this.loadCategoryNews();
      }
    });
  }

  loadCategoryNews(): void {
    this.loading = true;
    this.news = []; 
    this.newsService.getNews(this.category).subscribe((data) => {
      // this.loading hide loader and data.articles is used to fetch new data 
      this.news = data.articles || [];
      this.loading = false;
    });
  }

  trackByFn(index: number, item: any) {
    return item.title || index;
  }
}
