

import { Component } from "@angular/core";

@Component({

    selector:'app-CreatePosts',
    templateUrl:'./create_posts.component.html',
    styleUrl:'./create_posts.component.css'
})
export class CreatePostComponent{


    ValeurEntrer =''
    Valaff=''
    AffichePost(){

     this.Valaff = this.ValeurEntrer

    }
}