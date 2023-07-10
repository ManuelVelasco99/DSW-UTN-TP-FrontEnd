import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasAgregarComponent } from './caracteristicas-agregar.component';

describe('CaracteristicasAgregarComponent', () => {
  let component: CaracteristicasAgregarComponent;
  let fixture: ComponentFixture<CaracteristicasAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasAgregarComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
