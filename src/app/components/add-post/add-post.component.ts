import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // by default empty, ? - says it might have data in future
  // title?: string;
  // because of ngModel(2-way binding) the data will be added to this variables
  title: any;
  content: any;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // send it as object 
      const new_post = {
        title: this.title,
        content: this.content
      }
      this.postService.addPost(new_post).subscribe(() => this.router.navigate(['/blog']));
  }
}
