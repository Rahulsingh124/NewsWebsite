import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnChanges, OnInit {  
  @Input() selectedCategory: string = 'general';  
  news: any[] = [];
  loading: boolean = true;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {  
    this.loadNews();  
  }

  ngOnChanges(): void {
    if (!this.selectedCategory) return; 
    console.log(' Category Changed:', this.selectedCategory);
    this.loadNews();
  }

  loadNews(): void {
    this.loading = true;
    this.news = [];  
    this.newsService.getNews(this.selectedCategory).subscribe(
      (data) => {
        this.news = data.articles || [];
        this.loading = false;
      },
      (error) => {
        console.error('  Error fetching news:', error);
        this.loading = false;
      }
    );
  }
}
