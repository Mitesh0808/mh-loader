import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export interface LoaderState {
  show: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() {}

  startLoading() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  stopLoading() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }
}
