import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item!: Cocktail;
}
