import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeService } from './shared/recipe.service';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { LikeComponent } from './recipes/like/like.component';
import { ChildModule } from './child.module';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DBConnect } from './shared/dbconnect.service';
import { AppRouting } from './app.routing';
@NgModule({
  declarations: [
    RecipeBookAppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    LikeComponent,
  ],
  providers: [
    RecipeService, DBConnect
  ],
  imports: [
    BrowserModule, ChildModule, SharedModule, FormsModule,HttpClientModule, AppRouting
  ],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
