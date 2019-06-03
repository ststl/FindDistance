import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceBetweenCitiesComponent } from './distance-between-cities.component';

describe('DistanceBetweenCitiesComponent', () => {
  let component: DistanceBetweenCitiesComponent;
  let fixture: ComponentFixture<DistanceBetweenCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceBetweenCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceBetweenCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
