import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private httpService: HttpClient) {}
  ngOnInit() {
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
}
