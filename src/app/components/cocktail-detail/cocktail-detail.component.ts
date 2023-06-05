import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from 'src/app/models/cocktail.interface';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})

export class CocktailDetailComponent implements OnInit {
cocktail!: Cocktail;
showAllDetails = false;
ingredients: {ingredient:string,
  measure:string}[] = [];

  constructor(private cocktailsService: CocktailsService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    
    const identifier  = JSON.parse( this.activatedRoute.snapshot.paramMap.get('idDrink')!);
    console.log('Identifier --> ', identifier);
    
    this.cocktailsService.getCocktailById(identifier).subscribe((cocktail) => {
    if (!cocktail){
      return this.router.navigateByUrl('/');
    }
    this.cocktail = cocktail.drinks[0];
    console.log('Cocktail --> ',this.cocktail);
   
    this.ingredientsToArray(); 

    return 
    });
  }

 
 ingredientsToArray(): void {
  if (this.cocktail !== null && typeof this.cocktail === 'object') {
    for (var i = 1; i <= 15; i++) {
      var ingredientKey = 'strIngredient' + i;
      var quantityKey = 'strMeasure' + i;
  
      var ingredient = eval('this.cocktail.' + ingredientKey);
      var quantity = eval('this.cocktail.' + quantityKey);
  
      if (ingredient !== null /*&& quantity !== null*/) {
        this.ingredients.push({
          ingredient: ingredient,
          measure: quantity
        });
      }
    }
  }
}


 changeDetailsState():void {
  this.showAllDetails = !this.showAllDetails;
}
 
}
