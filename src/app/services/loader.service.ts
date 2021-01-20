import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);

  get loader() {
    return this.isLoading;
  }
  
  constructor() {}

  showLoader() {
    this.isLoading.next(true);
  }
  hideLoader() {
    this.isLoading.next(false);
  }
}
