import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  template: `
    <ul>
        <li *ngFor="let post of posts">
            <app-post [post]="post"></app-post>
        </li>
    </ul>

  `,
  styles: []
})
export class PostListComponent {
  posts = [];

  constructor() {}
}
