import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe('Tortilla', 'Tortilla de patatas con cebolla', '../../../assets/tortilla.png', [
            new Ingredient('Potatoes', 5),
            new Ingredient('Eggs', 10),
            new Ingredient('Onion', 1)
        ]),
        new Recipe('Another Tortilla', 'Tortilla de patatas con cebolla', '../../../assets/tortilla.png', [
            new Ingredient('Potatoes', 5),
            new Ingredient('Eggs', 10),
            new Ingredient('Onion', 1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addShoppingListIngredients(ingredients)
    }
}