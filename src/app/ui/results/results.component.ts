import { Component, Input, EventEmitter, Output } from '@angular/core';

import { faFrown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  faFrown = faFrown;

  @Input('countries') countries;

  @Output('show-detail') showDetail = new EventEmitter<any>();

}
