import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { BlogComponent } from './components/blog/blog.component';
import { CommentComponent } from './components/comment/comment.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "blog", canActivate: [AuthGuard],
    component: BlogComponent
  }, 
  {
    path: "contact",
    component: ContactComponent
  }, 
  {
    path: "blog/create",
    component: AddPostComponent
  },
  {
    path: "blog/edit/:id",
    component: EditPostComponent
  }, 
  {
    path: "blog/comment/:id",
    component: CommentComponent
  }, 
  {
    path: "blog/comment/editcomment/:id",
    component: EditCommentComponent
  }, 
  {
    path: "login", 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
