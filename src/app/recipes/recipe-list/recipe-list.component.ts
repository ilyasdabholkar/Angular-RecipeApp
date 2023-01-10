import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe('Test Recipe','Recipe Test Desc',"https://www.curiouscuisiniere.com/wp-content/uploads/2021/10/paneer-tikka-horizontal.1.jpg")
  ];
}
