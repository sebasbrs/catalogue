import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RepoComponent } from './repo.component';
import moment from 'moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RepoComponent],
        imports: [moment, FontAwesomeModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});