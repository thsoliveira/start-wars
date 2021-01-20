import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
@Injectable()
export class InterceptorServiceService implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    console.log("akshlkash")
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.loaderService.hideLoader();
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            console.log(error);
            this.loaderService.hideLoader();
          }
        }
      )
    );
  }
}
