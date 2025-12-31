import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {provideTranslateService} from "@ngx-translate/core";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
     provideTranslateService({
      fallbackLang: 'en',
      lang: 'en'
    }),
    provideZonelessChangeDetection(),
    provideRouter(routes, withInMemoryScrolling({
                scrollPositionRestoration: 'enabled', // This makes the page scroll to top on navigation
                anchorScrolling: 'enabled' // Optional: enables anchor scrolling
            })), 
  ]
};
