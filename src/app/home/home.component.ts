import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatalogueService } from '../services/catalogue/catalogue.service';
import { Repository } from '../../@types';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RepoComponent } from '../repo/repo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    RepoComponent,
    MatTabsModule,
    FormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  providers: [CatalogueService],
})
export class HomeComponent{
  constructor(
    public catalogueService: CatalogueService,
    public cdRef: ChangeDetectorRef,
    private location: Location) {console.log('HomeComponent initialized');}
  
  page = 0;
  search: string = '';
  readonly faSearch: IconDefinition = faSearch;
  
  refresh(): void {
    this.cdRef.detectChanges();
  
  }

  onPageChange(page: PageEvent): void {
    this.page = page.pageIndex;
  }

  onTabChange(tab: MatTabChangeEvent): void {
    const index = tab.index;
    const tabName = Object.keys(this.catalogueService.CONF.tabs)[index];
    const path = `/tab${this.catalogueService.CONF.tabs[tabName].path}`;

    if (this.location.path() !== path) {
      this.location.go(path);
    }
  }

  currentPageItems(modules: Repository[]): Repository[] {
    let filteredItems = modules;
    if (!!this.search) {
      filteredItems = filteredItems.filter((item) => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    }
    return filteredItems.slice(this.catalogueService.CONF.pageSize * this.page, this.catalogueService.CONF.pageSize * (this.page + 1));
  }
  
}