import { Ingredient } from "./ingredient.model";

export class Recipe{
  constructor(
    public title: string,
    public tags: string[],
    public timeToMake: string,
    public description: string,
    public ingredients: Ingredient[]
  ) {}
}
