import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './components/father/father.component';
import { Soon1Component } from './/components/soon1/soon1.component';
import { Soon2Component } from './components/soon2/soon2.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    Soon1Component,
    Soon2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
