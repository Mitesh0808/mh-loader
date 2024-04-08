import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService, LoaderState } from '../loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  show = false;
  subscription!: Subscription;
  constructor(private loaderSvc: LoaderService) {}

  ngOnInit() {
    this.subscription = this.loaderSvc.loaderState.subscribe(
      (state: LoaderState) => {
        setTimeout(() => (this.show = state.show));
      },
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
