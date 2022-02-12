import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOrderDetailsOverviewComponent } from './custom-order-details-overview.component';

describe('CustomOrderDetailsOverviewComponent', () => {
  let component: CustomOrderDetailsOverviewComponent;
  let fixture: ComponentFixture<CustomOrderDetailsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOrderDetailsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOrderDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
