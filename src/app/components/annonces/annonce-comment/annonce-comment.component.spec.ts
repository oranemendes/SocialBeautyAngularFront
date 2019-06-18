import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceCommentComponent } from './annonce-comment.component';

describe('AnnonceCommentComponent', () => {
  let component: AnnonceCommentComponent;
  let fixture: ComponentFixture<AnnonceCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
