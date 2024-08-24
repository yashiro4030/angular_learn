

import { Component } from "@angular/core";

@Component({

    selector:'app-CreatePosts',
    templateUrl:'./create_posts.component.html'
})
export class CreatePostComponent{

    NewPosts = 'No content'
     text = ''
     EntrerdValue = ''
    onAddPost(){

        this.NewPosts =this.EntrerdValue
    
    }

}