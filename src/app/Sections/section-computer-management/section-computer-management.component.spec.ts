import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComputerManagementComponent } from './section-computer-management.component';

describe('SectionComputerManagementComponent', () => {
  let component: SectionComputerManagementComponent;
  let fixture: ComponentFixture<SectionComputerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionComputerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComputerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
