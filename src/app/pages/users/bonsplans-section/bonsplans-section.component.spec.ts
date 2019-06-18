import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsplansSectionComponent } from './bonsplans-section.component';

describe('BonsplansSectionComponent', () => {
  let component: BonsplansSectionComponent;
  let fixture: ComponentFixture<BonsplansSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsplansSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsplansSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
