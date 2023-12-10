import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @Output() added = new EventEmitter<Ingredient>()
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  ingredientAdded() {
    const newName = this.nameInputRef.nativeElement.value
    const newAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(newName, newAmount)
    this.added.emit(newIngredient);
  }
}
