import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordCardsComponent } from './word-cards-mode/word-cards/word-cards.component';
import { WordCardComponent } from './word-cards-mode/word-card/word-card.component';
import { ModeMenuComponent } from './mode-menu/mode-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WordCardsComponent,
    WordCardComponent,
    ModeMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
