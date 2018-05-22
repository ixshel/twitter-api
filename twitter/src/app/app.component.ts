import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Service
import { TweetService } from './tweet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tweets$;

  constructor(private twitterService: TweetService) { }

  getTweets() {
    this.tweets$ = this.twitterService.getTweetByUser();
    console.log('Tweets', this.tweets$);
  }

  ngOnInit() { }
}
