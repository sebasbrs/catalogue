import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AppRoutingModule } from './app.routes'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [AppRoutingModule,CatalogueComponent],
})
export class AppComponent {
  constructor(injector: Injector) {
    if (typeof customElements !== 'undefined') {
      const catalogueElement = createCustomElement(CatalogueComponent, { injector });
      customElements.define('catalogue-element', catalogueElement);
    }
  }
}