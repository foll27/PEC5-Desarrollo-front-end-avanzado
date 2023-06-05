import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  getAllCocktails(): Observable<any> {
    return this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c')
  }

  getCocktailById(idDrink:number): Observable<any> {
    return this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink);
  }
}
