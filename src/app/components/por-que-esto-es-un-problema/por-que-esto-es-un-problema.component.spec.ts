import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorQueEstoEsUnProblemaComponent } from './por-que-esto-es-un-problema.component';

describe('PorQueEstoEsUnProblemaComponent', () => {
  let component: PorQueEstoEsUnProblemaComponent;
  let fixture: ComponentFixture<PorQueEstoEsUnProblemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorQueEstoEsUnProblemaComponent]
    });
    fixture = TestBed.createComponent(PorQueEstoEsUnProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
