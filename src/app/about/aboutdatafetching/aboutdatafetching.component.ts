import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutdatafetching',
  standalone: true,
  imports: [],
  templateUrl: './aboutdatafetching.component.html',
  styleUrl: './aboutdatafetching.component.css',
})
export class AboutdatafetchingComponent {
  constructor(private httpService: HttpClient) {}
  onClick() {
    // bring heavy data
    const data = this.httpService
      .get('https://jsonplaceholder.typicode.com/todos?_limit=200')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
