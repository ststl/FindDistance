import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPopularSearchesComponent } from './list-of-popular-searches.component';

describe('ListOfPopularSearchesComponent', () => {
  let component: ListOfPopularSearchesComponent;
  let fixture: ComponentFixture<ListOfPopularSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPopularSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPopularSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
