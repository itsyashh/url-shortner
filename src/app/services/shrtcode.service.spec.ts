import { TestBed } from '@angular/core/testing';

import { ShrtcodeService } from './shrtcode.service';

describe('ShrtcodeService', () => {
  let service: ShrtcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShrtcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
