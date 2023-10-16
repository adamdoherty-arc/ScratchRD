import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesDashboardComponent } from './rules-dashboard.component';

describe('RulesDashboardComponent', () => {
  let component: RulesDashboardComponent;
  let fixture: ComponentFixture<RulesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesDashboardComponent]
    });
    fixture = TestBed.createComponent(RulesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
