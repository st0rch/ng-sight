import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHelpdeskLinksComponent } from './section-helpdesk-links.component';

describe('SectionHelpdeskLinksComponent', () => {
  let component: SectionHelpdeskLinksComponent;
  let fixture: ComponentFixture<SectionHelpdeskLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHelpdeskLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHelpdeskLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
