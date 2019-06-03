import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDistanceComponent } from './show-distance.component';

describe('ShowDistanceComponent', () => {
  let component: ShowDistanceComponent;
  let fixture: ComponentFixture<ShowDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
