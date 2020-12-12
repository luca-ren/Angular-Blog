import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {POSTS} from '../shared/post.list';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts ?: Post[];

  constructor() { }

  ngOnInit(): void {
    this.posts = POSTS;
  }

  likeIt(post: Post): void {
    // @ts-ignore
    post.loveIts ++;
  }

  hateIt(post: Post): void {
    // @ts-ignore
    post.loveIts --;
  }
}
