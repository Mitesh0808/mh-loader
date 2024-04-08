import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),

    children: [
      {
        path: 'datafetching',
        loadComponent: () =>
          import('./about/aboutdatafetching/aboutdatafetching.component').then(
            (m) => m.AboutdatafetchingComponent,
          ),
      },
    ],
  },
];
