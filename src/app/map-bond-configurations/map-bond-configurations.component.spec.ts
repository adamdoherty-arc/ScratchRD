import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBondConfigurationsComponent } from './map-bond-configurations.component';

describe('MapBondConfigurationsComponent', () => {
  let component: MapBondConfigurationsComponent;
  let fixture: ComponentFixture<MapBondConfigurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapBondConfigurationsComponent]
    });
    fixture = TestBed.createComponent(MapBondConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
