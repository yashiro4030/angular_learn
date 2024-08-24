import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './Posts/Create_Posts/create_posts.component';
import { ShowPostsComponent } from './Posts/show-posts/show-posts.component';
import { FormsModule } from '@angular/forms';
import {MatInput}  from '@angular/material/input'
import {MatButton}  from '@angular/material/button'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ShowPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInput,
    MatButton
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
