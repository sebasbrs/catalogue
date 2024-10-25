import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule,routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from './environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), provideAnimationsAsync(), provideRouter(routes),MarkdownModule
  ],
}).catch(err => console.error(err));
