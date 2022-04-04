import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // Accepting data from Posts component
  @Input() post1: any;

  @Output() onDeletePost: EventEmitter<any> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit(): void {

  }

  onDelete() {
    this.onDeletePost.emit(this.post1);
      // this.postService.deletePost(this.post1.id).subscribe();
      // alert("Blog Post will be deleted");
      // console.log(this.post1.id)
  }
}
