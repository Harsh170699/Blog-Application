import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { CommentComponent } from './components/comment/comment.component';
import { DisplayCommentsComponent } from './components/display-comments/display-comments.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    PostsComponent,
    PostComponent,
    AddPostComponent,
    EditPostComponent,
    CommentComponent,
    DisplayCommentsComponent,
    EditCommentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
