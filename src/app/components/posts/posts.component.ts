import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  // Accepting class from Home Component
  @Input() colClass: any;
   
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data
    });
    // console.log(this.posts); 
  }

  deletePost(post: any) {
    this.postService.deletePost(post.id).subscribe(() => this.posts = this.posts.filter(
      // every post present inside the post list
      (p: any) => p.id != post.id
    ));
    alert("Blog Post will be deleted");
    // console.log(this.post1.id)
}
}
