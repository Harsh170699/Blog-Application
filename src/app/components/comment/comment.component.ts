import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  post_id?: number;

  commentData: any;
  pid?: number;
  name: any;
  comment: any;
  // listcomments: any = [];

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { } 

  ngOnInit(): void {
    this.postService.getComments().subscribe(data => {
      this.commentData = data;
      this.getCommentdata();
    }); 

    // get particular id 
    this.route.params.subscribe((parameters) => this.postService.getPost(parameters['id'])
    .subscribe((retrievedPost) => {
      this.post_id = retrievedPost.id;
      console.log("Particular id: " + this.post_id)
    }));
  }

  // get Comment Data
  getCommentdata() {
    this.postService.getComments().subscribe(data => {
      this.commentData = data;
      // console.log(this.commentData)
      this.displayPostComment()
    });
  }

  // Adding comment 
  onSubmit() {
    const new_comment = {
      pid: this.post_id,
      name: this.name,
      comment: this.comment
    }
    this.postService.addComment(new_comment).subscribe(data => {
      // console.log(data);
      this.getCommentdata();
    });
    // this.listcomments.push(new_comment);
    // this.postService.addPost(new_comment).subscribe();   
    this.name = "";
    this.comment = "";
    // console.log(this.listcomments) 
  }

  displayPostComment() {
    // console.log(this.commentData);
    // console.log("Post id: " + this.post_id)
    const listcomments = []
    this.commentData.forEach(element => {
          console.log("Element id: " + element.pid);
          if (this.post_id == element.pid) {
              // this.commentData.push(element);
              listcomments.push(element);            
          }
    });  
    this.commentData = listcomments;
  }

  onDelete(commentId: number) {
    this.postService.deleteComment(commentId).subscribe(() => this.commentData = this.commentData.filter(
      (c: any) => c.id != commentId
    ));
  }
}
