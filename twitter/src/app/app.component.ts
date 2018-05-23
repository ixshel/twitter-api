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
  query: string;
  user$;
  tweets$;

  constructor(private twitterService: TweetService) { }

  getTweets() {
    this.tweets$ = this.twitterService.getTweetByUser('@' + this.query);
  }

  getUser() {
    this.user$ = this.twitterService.getUser('@' + this.query);
  }

  ngOnInit() { }
}
