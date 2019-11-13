import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  template: `
    <h1 *ngIf="posts">{{ posts.length }}</h1>
    <ul>
        <li *ngFor="let post of posts">
            <app-post [post]="post"></app-post>
        </li>
    </ul>

  `,
  styles: []
})
export class PostListComponent {
  posts: Array<Post>;

  constructor(http: HttpClient) {
    http.get<Array<Post>>('http://jsonplaceholder.typicode.com/posts')
      .subscribe(data => { this.posts = data; });
  }
}
