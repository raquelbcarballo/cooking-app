import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potatoes', 5),
    new Ingredient('Eggs', 10),
    new Ingredient('Onion', 1)
  ]

  constructor() { }

  ngOnInit() { }
}
