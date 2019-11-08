import { Component, OnInit } from '@angular/core';

import {
  faMoon as faSolidMoon,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";

import { faMoon as faRegularMoon } from "@fortawesome/free-regular-svg-icons";

import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  changeTheme;

  faMoon: IconDefinition;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.setMoon();
  }

  setMoon() {
    this.faMoon = this.themeService.isDarkTheme() ? faSolidMoon : faRegularMoon;
  }

  toggleTheme() {
    this.themeService.isDarkTheme()? this.themeService.setLightTheme() : this.themeService.setDarkTheme();
    this.setMoon();
  }
}
