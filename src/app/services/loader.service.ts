import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading = new BehaviorSubject<boolean>(false);

  loadingProgressBar = new BehaviorSubject<boolean>(false);

  constructor() { }
}
