import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PalcesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor( private http: HttpClient ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {

    return new Promise( (resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.userLocation = [ coords.longitude, coords.longitude ];
          resolve(this.userLocation);
        },
        (err) => {
          alert('no se pudo obtener la geolocalizacion')
          console.log(err);
          reject();
        }
      );

    });

  }

  getPlacesByQuery( query: string = '' ){
  // todo: evaluar cuando el query es nulo

  this.isLoadingPlaces = true;

  this.http.get<PalcesResponse>(`https://api.mapbox.com/search/geocode/v6/forward?q=${query}.jason&proximity=-84.06737140412677%2C9.949467111969653&language=es&access_token=pk.eyJ1IjoibWV0YWwxOTkwIiwiYSI6ImNsbGczdjVmNzBxY2EzZXFhbDFtamRuazMifQ.UVGCqlR5xXEuQGmamcet3w`)
  .subscribe( resp => {

    console.log(resp.features);

    this.isLoadingPlaces = false;
    this.places = resp.features;



    });

  }

}


