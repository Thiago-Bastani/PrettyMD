import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ConversorComponent } from './conversor/conversor.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [AppComponent, ConversorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
