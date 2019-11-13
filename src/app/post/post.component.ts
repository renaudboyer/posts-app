import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post',
  template: `{{ post.title }}`,
  styles: []
})
export class PostComponent {
  @Input() post;
}
