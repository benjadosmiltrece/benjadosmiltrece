import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CualesSonLasAreasMasContaminadasComponent } from './cuales-son-las-areas-mas-contaminadas.component';

describe('CualesSonLasAreasMasContaminadasComponent', () => {
  let component: CualesSonLasAreasMasContaminadasComponent;
  let fixture: ComponentFixture<CualesSonLasAreasMasContaminadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CualesSonLasAreasMasContaminadasComponent]
    });
    fixture = TestBed.createComponent(CualesSonLasAreasMasContaminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
