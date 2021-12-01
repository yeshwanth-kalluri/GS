import { TestBed } from '@angular/core/testing';

import { LogintoService } from './loginto.service';

describe('LogintoService', () => {
  let service: LogintoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogintoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
