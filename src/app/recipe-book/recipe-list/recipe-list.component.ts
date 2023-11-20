import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recepies: Recipe[] = [
    new Recipe('Tortilla', 'Tortilla de patatas con cebolla', '../../assets/totilla.png')
  ];

  constructor() { }

  ngOnInit() {

  }
}
