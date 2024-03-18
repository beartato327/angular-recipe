import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";


export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('cheesecake',['dessert', 'dairy'], '2 hours', 'Rich and creamy cheesecake', [
          new Ingredient('cream cheese', '16', 'oz')
        ]),
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}