import { TestBed } from '@angular/core/testing';

import { JobDetailsService } from './job-details.service';

describe('JobDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobDetailsService = TestBed.get(JobDetailsService);
    expect(service).toBeTruthy();
  });
});
