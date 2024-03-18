import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Recipe } from '../models/recipe.model';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule, CommonModule],
  providers: [RecipeService],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    return (this.recipes = this.recipeService.getRecipes());
  }
}
