import { TestBed } from '@angular/core/testing';

import { AllatServiceService } from './allat-service.service';

describe('AllatServiceService', () => {
  let service: AllatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
