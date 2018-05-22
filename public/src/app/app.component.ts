import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tweets$: any = [];

  constructor(private _twitter: TwitterService) { }

  ngOnInit() {
    this.tweets$ = this._twitter.getUserTimeLine();
    // console.log('data -> ', this.tweets$);
  }
}
