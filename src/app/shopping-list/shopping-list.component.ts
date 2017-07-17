import { Ingredient } from '../shared/ingredient.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 12)
  ];
  constructor() { }

  ngOnInit() {
  }

}
