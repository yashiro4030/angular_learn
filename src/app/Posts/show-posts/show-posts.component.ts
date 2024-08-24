import { Component } from '@angular/core';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrl: './show-posts.component.css'
})
export class ShowPostsComponent {

  inputEntree =''
  InitInput =''
  AfficheMsg(){

    this.InitInput = this.inputEntree
  }
}
