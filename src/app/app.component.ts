import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AppRoutingModule } from './app.routes'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  imports: [AppRoutingModule,CatalogueComponent,RouterOutlet],
})
export class AppComponent {
  constructor(injector: Injector) {
    if (typeof customElements !== 'undefined') {
      const catalogueElement = createCustomElement(CatalogueComponent, { injector });
      customElements.define('catalogue-element', catalogueElement);
    }
  }
}