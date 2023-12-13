import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe('Tortilla', 'Tortilla de patatas con cebolla', '../../../assets/tortilla.png'),
        new Recipe('Another Tortilla', 'Tortilla de patatas con cebolla', '../../../assets/tortilla.png')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}