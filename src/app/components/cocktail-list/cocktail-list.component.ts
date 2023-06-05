import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.interface';
import { CocktailsService } from 'src/app/services/cocktails.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
  animations: [
    trigger('cocktailListAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];
  spinner: boolean = true;
  currentView = 'cards';


  constructor(private cocktailsService: CocktailsService) {}

  ngOnInit():void {
    this.cocktailsService.
    getAllCocktails()
    .subscribe((cocktails) => {
      this.cocktails = cocktails.drinks;
      this.spinner = false;
    });
      
    this.cocktailListAnimation();
  };

  cocktailListAnimation() {
    setTimeout(() => {
      this.cocktails = [...this.cocktails]; 
    }, 0);
  }

  changeView(view: string) {
    this.currentView = view;
  };
}
