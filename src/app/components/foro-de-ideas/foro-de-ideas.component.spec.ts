import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoDeIdeasComponent } from './foro-de-ideas.component';

describe('ForoDeIdeasComponent', () => {
  let component: ForoDeIdeasComponent;
  let fixture: ComponentFixture<ForoDeIdeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForoDeIdeasComponent]
    });
    fixture = TestBed.createComponent(ForoDeIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
