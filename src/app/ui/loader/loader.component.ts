import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { LoaderService } from './loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(private loaderService: LoaderService) { }

  isLoading: Subject<boolean> = this.loaderService.isLoading;
}
