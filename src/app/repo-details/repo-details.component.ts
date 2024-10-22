import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBalanceScale,
  faCaretLeft,
  faClock,
  faCodeBranch,
  faExternalLinkAlt,
  faEye,
  faGlobe,
  faStar,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RepoDetailsData } from '../services/resolvers/repo-details-resolver.service';
import { MomentModule } from 'ngx-moment';
import { MarkdownModule } from 'ngx-markdown'; // Importa el módulo aquí


@Component({
  selector: 'app-repo-details',
  standalone: true,
  imports: [
    CommonModule,
    MomentModule,
    FontAwesomeModule,
    MarkdownModule,
  ],
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss'],
})
export class RepoDetailsComponent{
  constructor(private route: ActivatedRoute) {
    this.data$ = route.data.pipe(
      map(x => x?.["data"])
    );
  }

  readonly faCaretLeft:  IconDefinition =  faCaretLeft;
  readonly faGlobe:  IconDefinition = faGlobe;
  readonly faUserCircle:  IconDefinition = faUserCircle;
  readonly faGithub:  IconDefinition = faGithub;
  readonly faExternalLinkAlt:  IconDefinition = faExternalLinkAlt;
  readonly faEye:  IconDefinition = faEye;
  readonly faStar:  IconDefinition = faStar;
  readonly faCodeBranch:  IconDefinition = faCodeBranch;
  readonly faClock:  IconDefinition = faClock;
  readonly faBalanceScale:  IconDefinition = faBalanceScale;

  data$: Observable<RepoDetailsData>;

}