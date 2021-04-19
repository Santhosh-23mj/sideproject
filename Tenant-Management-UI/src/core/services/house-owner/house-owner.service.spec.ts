import { TestBed } from '@angular/core/testing';

import { HouseOwnerService } from './house-owner.service';

describe('HouseOwnerService', () => {
  let service: HouseOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
