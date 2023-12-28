import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';
import { ROUTES } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: ROUTES, useValue: AppRoutes, multi: true },
    // ... other providers if needed ...
  ],
}).catch(err => console.error(err));