import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { CountriesService } from '../../countries.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  country;
  faFrown = faFrown;
  faArrowLeft = faArrowLeft;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: CountriesService) { }

  ngOnInit() {
    this.processCountryDetails();
  }

  back() {
    this.router.navigate(['home']);
  }

  private processCountryDetails() {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.country)).subscribe((result) => {
        this.country = result;

        if (result) {
          this.setCountryArrays(result);
        }
      });
  }

  private setCountryArrays(result: any) {
    result.currencies = result.currencies.map(item => item['name']);
    result.languages = result.languages.map(item => item['name']);
    result.borders = this.getBorders(result);
  }

  getBorders(country) {
    const borders = [];
    country.borders.forEach(border => {
      this.service.getByCode(border).subscribe(result => borders.push(result));
    });
    return borders;
  }

  showDetail(country: any) {
    this.country = country;
    this.setCountryArrays(country);
  }

}
