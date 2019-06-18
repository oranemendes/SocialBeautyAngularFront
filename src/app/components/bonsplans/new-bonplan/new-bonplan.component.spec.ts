import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBonplanComponent } from './new-bonplan.component';

describe('NewBonplanComponent', () => {
  let component: NewBonplanComponent;
  let fixture: ComponentFixture<NewBonplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBonplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
