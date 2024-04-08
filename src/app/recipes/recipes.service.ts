import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";


export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('cheesecake',['dessert', 'dairy'], '2 hours', 'Cheesecake with a thick graham cracker crust, a colorful layer of cheesecake filling with berries on top.', [
          new Ingredient('cream cheese', '16', 'oz')
        ]),
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}