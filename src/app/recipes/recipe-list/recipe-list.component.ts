import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
      new Recipe('This is a name', 'Just a name', 'http://www.coca-colacompany.com/stories/recipes-coca-cola-chicken-wings')
    ];
  constructor() { }
  ngOnInit() {
  }

}
