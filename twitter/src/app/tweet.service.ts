import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private _http: HttpClient) { }

  getTweetByUser(): Observable<any> {
    return this._http
      .get('/api/tweets')
      .pipe(
        map(data => data),
        last(),
        catchError(error => error)
      );
  }

  getTweetByQuery(): Observable<any> {
    return this._http
      .get('/api/tweetsBySearch')
      .pipe(
        map(data => data),
        last(),
        catchError(error => error)
      );
  }
}
