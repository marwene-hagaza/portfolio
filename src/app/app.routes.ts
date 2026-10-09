import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  {
    path: 'biography',
    loadComponent: () => import('./pages/biography/biography').then((m) => m.Biography),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience').then((m) => m.MyProjectsComponent),
  },

  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
