import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  template: `
    <div *ngIf="post">
      <h2>{{ post.title }}</h2>
      <p>
        {{ post.body }}
      </p>
    </div>
  `,
  styles: []
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('postId');
      this.http.get<Post>(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .subscribe(data => { this.post = data; });
    });
  }
}
