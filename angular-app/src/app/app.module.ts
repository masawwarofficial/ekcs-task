import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {AppProvider} from "./app.provider"
 import { HttpClientModule } from '@angular/common/http';
 import { ToastrModule ,ToastNoAnimationModule} from 'ngx-toastr';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {NgxPrintModule} from 'ngx-print';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
     AppComponent,
    HomePageComponent, 
    
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
  ],
  providers: [AppProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
