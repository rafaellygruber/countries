import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

import { LoaderComponent } from './ui/loader/loader.component';
import { LoaderService } from './ui/loader/loader.service';
import { LoaderInterceptor } from './ui/loader/loader.interceptor';
import { RegionComponent } from './ui/region/region.component';
import { ResultsComponent } from './ui/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    DetailComponent,
    RegionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
