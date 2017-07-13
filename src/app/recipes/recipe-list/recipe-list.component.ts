import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  holder = ' dsacasdfxefvcxsfxfsfxex';
  recipes: Recipe[] = [
      new Recipe('This is a name',
       'Just a name',
       'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
       new Recipe('This is a name',
       'Just a name',
       'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
    ];
  hold = ['asdsa', 'aaaa', 'aaaaaaaaa123'];
  constructor() { }
  ngOnInit() {
  }

}
