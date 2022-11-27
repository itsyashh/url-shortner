import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { delay, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShrtcodeService {

  constructor(private http : HttpClient) { }
  url = 'https://api.shrtco.de/v2/';
  shrtCodeUrl(urlValue : any): Observable<any>{
    const params = urlValue;
    const body = new HttpParams({fromObject: params})
    let postValue = 'shorten?'+body
    return this.http.get(this.url + postValue)
  }
}
