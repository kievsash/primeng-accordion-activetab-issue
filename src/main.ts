import { bootstrapApplication } from '@angular/platform-browser';
import { AccordionDynamicDemo } from './app/accordion-dynamic-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(AccordionDynamicDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));