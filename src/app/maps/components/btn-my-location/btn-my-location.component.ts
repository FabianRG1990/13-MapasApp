import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent {


  constructor(
    private placesServices: PlacesService,
    private mapService: MapService,
  ){}

goToMyLocation() {

  if(!this.placesServices.isUserLocationReady) return;
  if(!this.mapService.isMapReady) return;

  this.mapService.flyto( this.placesServices.userLocation! )

}

}
