import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonplanCommentComponent } from './bonplan-comment.component';

describe('BonplanCommentComponent', () => {
  let component: BonplanCommentComponent;
  let fixture: ComponentFixture<BonplanCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonplanCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonplanCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
