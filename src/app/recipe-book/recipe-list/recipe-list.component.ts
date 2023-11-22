import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tortilla', 'Tortilla de patatas con cebolla', '../../../assets/tortilla.png'),
    new Recipe('Tortilla', 'Tortilla de patatas con cebolla', '../../../assets/tortilla.png')
  ];

  constructor() { }

  ngOnInit() {

  }
}
