import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gatos } from './gatos';

describe('Gatos', () => {
  let component: Gatos;
  let fixture: ComponentFixture<Gatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
