import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllatokListajaComponent } from './allatok-listaja.component';

describe('AllatokListajaComponent', () => {
  let component: AllatokListajaComponent;
  let fixture: ComponentFixture<AllatokListajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllatokListajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllatokListajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
