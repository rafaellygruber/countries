import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { CountriesService } from '../../countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  label = 'Search for a country...';
  countries: Array<any>;
  searchForm: FormGroup;

  faSearch = faSearch;

  constructor(private service: CountriesService, public router: Router) {

    this.searchForm = new FormGroup({
      country: new FormControl('')
    });

    this.searchForm.get('country').valueChanges.pipe(debounceTime(400))
    .subscribe(country => country ? this.getByName(country) : this.getAll());
  }

  ngOnInit() {
    this.getAll();
  }

  showDetail(country: any) {
    this.router.navigate(['/detail'], { state: { country } });
  }

  selectRegion(region) {
    this.getByRegion(region.value);
  }

  private getAll() {
    this.service.getAll().subscribe(result => this.countries = result);
  }

  private getByName(country: any) {
    this.service.getByName(country).subscribe(result => this.countries = result);
  }

  private getByRegion(region: any) {
    this.service.getByRegion(region).subscribe(result => this.countries = result);
  }
}
