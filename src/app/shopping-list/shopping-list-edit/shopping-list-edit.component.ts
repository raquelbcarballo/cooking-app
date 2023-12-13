import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {

  }

  ingredientAdded() {
    const newName = this.nameInputRef.nativeElement.value
    const newAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(newName, newAmount)
    this.shoppingListService.addIngredient(newIngredient)
  }
}
