import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChange = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Potatoes', 5),
        new Ingredient('Eggs', 10),
        new Ingredient('Onion', 1)
    ]

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChange.emit(this.ingredients.slice())
    }
}