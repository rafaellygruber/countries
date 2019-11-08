import { Component, Output, EventEmitter } from '@angular/core';

import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const FILTER_BY_REGION = 'Filter by Region';

@Component({
  selector: 'region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regions = [
    { label: 'Africa', value: 'africa' },
    { label: 'America', value: 'americas' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
  ];

  showRegions = false;
  selectedRegion = FILTER_BY_REGION;
  faArrow = faChevronUp;

  @Output('select-region') selectRegion = new EventEmitter<any>();

  toggle() {
    this.showRegions = !this.showRegions;
    this.faArrow =  this.showRegions ? faChevronDown : faChevronUp;
  }

  show() {
    this.toggle();
  }

  select(region) {
    this.selectedRegion = region.label;
    this.selectRegion.emit(region);
    this.toggle();
  }

}
