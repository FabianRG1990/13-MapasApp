import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if ( !navigator.geolocation ) {
  alert( 'Navegador no soprta el Geolocation' );
  throw new Error('Navegador no soprta el Geolocation')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
