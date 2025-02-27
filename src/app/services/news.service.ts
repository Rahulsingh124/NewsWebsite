import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private API_URL = 'https://newsapi.org/v2/top-headlines';
  private API_KEY = '45e3bb2f652849089f39e3bd9872563b';
  private PROXY_URL = 'https://api.allorigins.win/get?url='; 

  constructor(private http: HttpClient) {}

  getNews(category: string = 'general', country: string = 'us'): Observable<any> {
    const url = `${this.API_URL}?country=${country}&category=${category}&apiKey=${this.API_KEY}`;
    const proxiedUrl = `${this.PROXY_URL}${encodeURIComponent(url)}`;

    return new Observable(observer => {
      this.http.get(proxiedUrl).subscribe(
        (response: any) => {
          observer.next(JSON.parse(response.contents)); 
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }
}
