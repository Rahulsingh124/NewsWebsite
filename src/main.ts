import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  
import { AppRoutingModule } from './app/app-routing.module'; 
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    AppRoutingModule 
  ]
}).catch(err => console.error(err));
