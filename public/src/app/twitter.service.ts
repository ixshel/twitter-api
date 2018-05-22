import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';
import { map, last, catchError } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  getUserTimeLine(): Observable<any> {
    console.log('get user timeline');
    return this.http
      .get('/api/tweets')
      .pipe(
        map(data => data),
        last(),
        catchError(e => e)
      );
  }

  getBySearch() {
    this.http
      .get('/tweetsBySearch')
      .pipe(
        map(data => data),
        last(),
        catchError(e => e)
      );
  }
}
