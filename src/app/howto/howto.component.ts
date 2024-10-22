import { Component } from '@angular/core';
import { CatalogueService } from '../services/catalogue/catalogue.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-howto',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './howto.component.html',
})
export class HowtoComponent {
  constructor(public catalogueService: CatalogueService) {}

  readonly faCaretLeft: IconDefinition = faCaretLeft;
}