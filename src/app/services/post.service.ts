import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "http://localhost:3000/posts";
  private commentUrl = "http://localhost:3000/comments";

  constructor(private http: HttpClient) { }

  // observable - it has to wait till till is returned 
  getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.apiUrl);
  }

  deletePost(id: number): Observable<Post> {
    // template literals 
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Post>(url)
  }

  addPost(post: any): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  editPost(post: any): Observable<Post> { 
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.put<Post>(url, post);
  }

  // getting single post for edit component
  getPost(id: number): Observable<Post> {
    // template literals 
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  addCommentPost(post: any): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  // getComment(){
  //   return this.http.get(this.commentUrl);
  // } 

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl);
  }

  addComment(comment: any): Observable<Comment> {
    return this.http.post<Comment>(this.commentUrl, comment);
  }

  // for updating comment
  editComment(comment: any): Observable<Comment> {
    // template literals 
    const url = `${this.commentUrl}/${comment.id}`;
    return this.http.put<Comment>(url, comment)
  }

  // we are trying to get single comment for EditCommentComponent
  getComment(id: number): Observable<Comment> {
    const url = `${this.commentUrl}/${id}`;
    return this.http.get<Comment>(url)
  }

  // Deleting particular comment
  deleteComment(id: number): Observable<Comment> {
    const url = `${this.commentUrl}/${id}`;
    return this.http.delete<Comment>(url);
}

}
