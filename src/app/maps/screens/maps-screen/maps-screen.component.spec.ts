import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsScreenComponent } from './maps-screen.component';

describe('MapsScreenComponent', () => {
  let component: MapsScreenComponent;
  let fixture: ComponentFixture<MapsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsScreenComponent]
    });
    fixture = TestBed.createComponent(MapsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
