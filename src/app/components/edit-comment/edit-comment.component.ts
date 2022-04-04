import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  // comment: any;

  id?: number;
  name?: string;
  comment?: string;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((parameters) => this.postService.getComment(parameters['id'])
    .subscribe((retrievedComment) => {
        this.id = retrievedComment['id'];
        this.name = retrievedComment['name'];
        this.comment = retrievedComment['comment'];
    })
    )
  }

  onSubmit() {
      const updatedComment = {
        id: this.id, 
        name: this.name,
        comment: this.comment
      }
      this.postService.editComment(updatedComment).subscribe(() => this.router.navigate(['/blog/comment/', updatedComment.id]));
  }

}
