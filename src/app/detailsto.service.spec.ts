import { TestBed } from '@angular/core/testing';

import { DetailstoService } from './detailsto.service';

describe('DetailstoService', () => {
  let service: DetailstoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailstoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
