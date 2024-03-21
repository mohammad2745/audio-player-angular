import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAudioWaveModule } from "ngx-audio-wave";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAudioWaveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
