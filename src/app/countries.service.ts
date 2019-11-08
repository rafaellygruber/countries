import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get(`${this.url}/all`).pipe(
      map(response => <any[]>(response))
    );
  }

  getByCode(code: string) {
    return this.http.get(`${this.url}/alpha/${code}`).pipe(
      map(response => <any[]>(response))
    );

  }

  getByName(name: string) {
    return this.http.get(`${this.url}/name/${name}`).pipe(
      map(response => <any[]>(response)),
      catchError(error => of([]))
    );
  }

  getByRegion(region: string) {
    return this.http.get(`${this.url}/region/${region}`).pipe(
      map(response => <any[]>(response))
    );
  }
}
