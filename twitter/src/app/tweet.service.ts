import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private _http: HttpClient) { }

  getTweetByUser(name): Observable<any> {
    return this._http
      .get('/api/tweets', { params: new HttpParams().set('name', name) })
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

  getUser(name): Observable<any> {
    return this._http
      .get('/api/user', { params: new HttpParams().set('name', name) })
      .pipe(
        map(data => data),
        last(),
        catchError(error => error)
      );
  }
}
