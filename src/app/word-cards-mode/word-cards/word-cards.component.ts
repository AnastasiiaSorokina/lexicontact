import { Component, OnInit } from '@angular/core';
import { WordCard } from '../../models/WordCard';
import { shuffleArray } from './word-cards-helper';

@Component({
  selector: 'app-word-cards',
  templateUrl: './word-cards.component.html',
  styleUrls: ['./word-cards.component.css']
})
export class WordCardsComponent implements OnInit {
  currentCardIndex: number;
  foreignCards: WordCard[];
  foreignToBase: boolean;

  ngOnInit(): void {
    this.currentCardIndex = 0;
    this.foreignToBase = true;
    this.foreignCards = [
      new WordCard("η εβδομάδα", "Неделя"),
      new WordCard("η Δευτέρα", "Понедельник"),
      new WordCard("η Τρίτη", "Вторник"),
      new WordCard("η Τετάρτη", "Среда"),
      new WordCard("η Πέμπτη", "Четверг"),
      new WordCard("Τι μέρα είναι σήμερα;", "Какой сегодня день и ещё какой-то длиный текст?")
    ];
  }

  moveForward(): void {
    if (this.currentCardIndex < this.foreignCards.length - 1) {
      this.currentCardIndex++;
    } else {
      console.error("End of the list!");
    }
  }

  moveBackward(): void {
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
    } else {
      console.error("End of the list!");
    }
  }

  shuffleCards(): void {
    shuffleArray(this.foreignCards);
    this.currentCardIndex = 0;
  }

  toggleForeignToBase(): void {
    this.foreignToBase = !this.foreignToBase;
  }

  isCardHidden(uuid: string) {
    return this.currentCardIndex !==
      this.foreignCards.findIndex(card => card.uuid === uuid);
  }
}
/*change_circle
autorenew
compare_arrows
rotate_90_degrees_ccw*/