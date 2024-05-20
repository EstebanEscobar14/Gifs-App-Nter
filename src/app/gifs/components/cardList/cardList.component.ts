import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './cardList.component.html',
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
