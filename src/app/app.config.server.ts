import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loaderInterceptor } from './loader.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),

    provideHttpClient(withInterceptors([loaderInterceptor])),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
