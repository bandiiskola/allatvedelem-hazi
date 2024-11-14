import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllatReszleteiComponent } from './allat-reszletei.component';

describe('AllatReszleteiComponent', () => {
  let component: AllatReszleteiComponent;
  let fixture: ComponentFixture<AllatReszleteiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllatReszleteiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllatReszleteiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
