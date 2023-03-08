import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WordCard } from '../../models/WordCard';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})
export class WordCardComponent implements OnInit {
  @Input() foreignCard: WordCard;
  @Input() foreignToBase: boolean;
  @Output() moveForwardEvent = new EventEmitter();
  @Output() moveBackwardEvent = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  flipCard(): void {
    this.foreignToBase = !this.foreignToBase;
  }

  moveForward(): void {
    this.moveForwardEvent.emit();
  }

  moveBackward(): void {
    this.moveBackwardEvent.emit();
  }

  toggleBookmarked(): void {
    this.foreignCard.bookmarked = !this.foreignCard.bookmarked;
  }
}
