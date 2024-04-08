import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { LoaderService, LoaderState } from './loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  show = false;
  subscription!: Subscription;
  constructor(
    private httpService: HttpClient,
    private loaderSvc: LoaderService,
  ) {
    console.log('rts');
  }
  title = 'mh-loader';
  router = inject(Router);
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  ngOnInit() {
    this.title = 'mh-loader';
    this.subscription = this.loaderSvc.loaderState.subscribe(
      (state: LoaderState) => {
        console.log(state);
        setTimeout(() => (this.show = state.show));
      },
    );
    console.log(this.title);
    const data = this.httpService
      .get('https://jsonplaceholder.typicode.com/todos?_limit=200')
      .subscribe((data) => {
        console.log(data);
      });
  }
  onClick() {
    // bring heavy data
    const data = this.httpService
      .get('https://jsonplaceholder.typicode.com/todos?_limit=200')
      .subscribe((data) => {
        console.log(data);
      });
  }

  onRouteChange() {
    // /about/datafetching
    this.router.navigate(['/about']);
  }
}
