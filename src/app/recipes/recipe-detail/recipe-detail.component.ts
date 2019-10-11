import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { NgForm } from "@angular/forms"
import { DBConnect } from 'src/app/shared/dbconnect.service';
@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  loadedPosts:any[]=[];
  constructor(private db: DBConnect) {}

  addRecipe(nf:NgForm){
    //console.log("Recipe added", nf.value);
    this.db.addrecipeToDB(nf.value);
  }
  loadRecipe(){
    console.log("In recipe-detail.component.ts");
    this.db.loadRecipeFromDB().subscribe(
      posts=>{this.loadedPosts=posts}
    )
    console.log(this.loadedPosts);
    
  }
  ngOnInit() {
  }

}
