import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { SeparatorComponent } from './separator/separator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DogListComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
