import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineDeleteComponent } from './requestline-delete.component';

describe('RequestlineDeleteComponent', () => {
  let component: RequestlineDeleteComponent;
  let fixture: ComponentFixture<RequestlineDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestlineDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlineDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
