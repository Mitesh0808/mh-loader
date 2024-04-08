import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from './loader.service';
import { finalize, tap } from 'rxjs';
export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadeingService = inject(LoaderService);
  console.log('testing');
  loadeingService.startLoading();
  return next(req).pipe(
    tap(() => console.log('done')),
    finalize(() => {
      console.log('done');
      loadeingService.stopLoading();
    }),
  );
};
