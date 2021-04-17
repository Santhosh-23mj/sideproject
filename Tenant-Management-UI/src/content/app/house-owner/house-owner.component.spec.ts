import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseOwnerComponent } from './house-owner.component';

describe('HouseOwnerComponent', () => {
  let component: HouseOwnerComponent;
  let fixture: ComponentFixture<HouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
