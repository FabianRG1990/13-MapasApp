import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoibWV0YWwxOTkwIiwiYSI6ImNsbGczdjVmNzBxY2EzZXFhbDFtamRuazMifQ.UVGCqlR5xXEuQGmamcet3w';

if ( !navigator.geolocation ) {
  alert( 'Navegador no soprta el Geolocation' );
  throw new Error('Navegador no soprta el Geolocation')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
