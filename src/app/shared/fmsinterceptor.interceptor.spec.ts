import { TestBed } from '@angular/core/testing';

import { FmsinterceptorInterceptor } from './fmsinterceptor.interceptor';

describe('FmsinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FmsinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FmsinterceptorInterceptor = TestBed.inject(FmsinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
