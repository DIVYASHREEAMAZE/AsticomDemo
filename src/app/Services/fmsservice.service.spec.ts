import { TestBed } from '@angular/core/testing';

import { FmsserviceService } from './fmsservice.service';

describe('FmsserviceService', () => {
  let service: FmsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FmsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
