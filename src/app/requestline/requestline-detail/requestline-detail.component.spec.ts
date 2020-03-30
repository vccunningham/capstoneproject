import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineDetailComponent } from './requestline-detail.component';

describe('RequestlineDetailComponent', () => {
  let component: RequestlineDetailComponent;
  let fixture: ComponentFixture<RequestlineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestlineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
