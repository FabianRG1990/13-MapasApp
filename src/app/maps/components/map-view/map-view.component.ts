import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import {Map, Popup, Marker} from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(private placesServices: PlacesService){}

  ngAfterViewInit(): void {
    if (!this.placesServices.userLocation) throw Error('No hay placesServices.userLocation')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesServices.userLocation,
      zoom: 9, // starting zoom
      });


      const popup = new Popup()
      .setHTML(`
      <h6>Aqui estoy</h6>
      <span>Estoy en esta parte del mundo</span>
      `);

      new Marker({color: 'red'})
      .setLngLat(this.placesServices.userLocation)
      .setPopup(popup)
      .addTo(map)


  }

}
