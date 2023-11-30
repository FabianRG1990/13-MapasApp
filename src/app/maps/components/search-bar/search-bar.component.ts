import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor(private placesService: PlacesService){}

onKeyUp(query: string = '') {

  if ( this.debounceTimer ) clearTimeout( this.debounceTimer );

  this.debounceTimer = setTimeout( () => {

  this.placesService.getPlacesByQuery(query);
  }, 350 );

}

}
