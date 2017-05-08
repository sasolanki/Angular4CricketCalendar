import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CricketMatchesComponent } from './cricket-matches/cricket-matches.component';
import { CricketService } from './cricket.service';

@NgModule({
  declarations: [
    AppComponent,
    CricketMatchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CricketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
