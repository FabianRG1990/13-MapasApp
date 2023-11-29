import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor(){}

onKeyUp(query: string = '') {

  if ( this.debounceTimer ) clearTimeout( this.debounceTimer );

  this.debounceTimer = setTimeout( () => {

    console.log('Searching for ', query);
  }, 350 );

}

}
