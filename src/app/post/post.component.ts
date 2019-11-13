import {Component, Input} from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-post',
  template: `{{ post.title }}`,
  styles: []
})
export class PostComponent {
  @Input() post: Post;
}
