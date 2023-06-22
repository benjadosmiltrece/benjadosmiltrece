import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoIncentivarAOtrosAAyudarComponent } from './como-incentivar-a-otros-a-ayudar.component';

describe('ComoIncentivarAOtrosAAyudarComponent', () => {
  let component: ComoIncentivarAOtrosAAyudarComponent;
  let fixture: ComponentFixture<ComoIncentivarAOtrosAAyudarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComoIncentivarAOtrosAAyudarComponent]
    });
    fixture = TestBed.createComponent(ComoIncentivarAOtrosAAyudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
