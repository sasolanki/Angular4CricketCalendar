import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CricketService {

  //Replace '<YourAPIKey>' with your API key provided by cricapi
  private fetchMatchesEndPoint = 'http://cricapi.com/api/matches?apikey=<YourAPIKey>';
  private fetchScoreEndpoint = 'http://cricapi.com/api/cricketScore?apikey=<YourAPIKey>&unique_id=';
  constructor(private http: Http) { }

  getMatches() {
    const url = `${this.fetchMatchesEndPoint}`;
    return this.http.get(url)
      .map(this.extractMatches)
      .catch(this.handleError);
  }

  getScore(uniqueId: string) {
    const scoreurl = `${this.fetchScoreEndpoint}` + uniqueId;
    return this.http.get(scoreurl)
      .map(this.extractScore)
      .catch(this.handleError);
  }

  private extractMatches(res: Response) {
    let body = res.json();
    return body.matches || {};
  }

  private extractScore(scoreRes: Response) {
    let body = scoreRes.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
