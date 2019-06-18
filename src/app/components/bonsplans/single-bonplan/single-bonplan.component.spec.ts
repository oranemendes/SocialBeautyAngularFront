import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBonplanComponent } from './single-bonplan.component';

describe('SingleBonplanComponent', () => {
  let component: SingleBonplanComponent;
  let fixture: ComponentFixture<SingleBonplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBonplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
