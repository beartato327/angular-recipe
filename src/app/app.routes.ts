import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: '**', component: PageNotFoundComponent}
];
