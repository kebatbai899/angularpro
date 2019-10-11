import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
@Injectable()

export class DBConnect{
    addrecipeToDB(recipe:any){
        //console.log("recipe is added to db");
        this.http.post('http://localhost:3000/person', recipe).subscribe(mydata=>{
            console.log(mydata);
        })

    }

    loadRecipeFromDB(){
        console.log("Load from DB in service");
        return this.http.get('http://localhost:3000/people')
          .pipe(
            map(responseData => {
              const postsArray: any[] = [];
              for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key });
                    }
                }
                return postsArray;
            })
          );
    }
    constructor (private http:HttpClient){

    }
}