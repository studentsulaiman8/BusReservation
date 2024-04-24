import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusComponent } from './components/bus/bus.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModules} from "./app.routing.modules";
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {ServicesService} from "./services/ContactService";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BusComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    CarouselComponent



  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModules,
      ReactiveFormsModule
    ],
  providers: [ ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
