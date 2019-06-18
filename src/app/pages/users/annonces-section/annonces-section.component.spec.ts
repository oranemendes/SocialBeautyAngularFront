import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesSectionComponent } from './annonces-section.component';

describe('AnnoncesSectionComponent', () => {
  let component: AnnoncesSectionComponent;
  let fixture: ComponentFixture<AnnoncesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
