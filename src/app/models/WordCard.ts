export class WordCard {
  uuid: string;
  foreignWord: string;
  baseWord: string;
  bookmarked: boolean;

  constructor(foreignWord: string, baseWord: string) {
    this.uuid = (Math.floor(Math.random() * 10000)).toString();
    this.bookmarked = false;
    this.foreignWord = foreignWord;
    this.baseWord = baseWord;
  }
}