import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './pages/category/category.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  
  imports: [  
    BrowserModule,
    HttpClientModule,
    AppComponent,
    CategoryComponent,
    NewsCardComponent,
    AppRoutingModule
    NavbarComponent 
  ],
  providers: [],
 
})
export class AppModule {}
