import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoPuedoYoMismoReciclarComponent } from './como-puedo-yo-mismo-reciclar.component';

describe('ComoPuedoYoMismoReciclarComponent', () => {
  let component: ComoPuedoYoMismoReciclarComponent;
  let fixture: ComponentFixture<ComoPuedoYoMismoReciclarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComoPuedoYoMismoReciclarComponent]
    });
    fixture = TestBed.createComponent(ComoPuedoYoMismoReciclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
