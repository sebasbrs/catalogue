import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MomentModule } from 'ngx-moment';

@Component({
  selector: 'app-repo',
  standalone: true,
  imports: [
    MomentModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() stars: number = 0;
  @Input() created: Date = new Date();
  @Input() description: string = '';
  @Input() fullName: string = '';

  readonly faStar: IconDefinition = faStar;
}


