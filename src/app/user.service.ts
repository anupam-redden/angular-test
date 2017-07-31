import { Injectable }    from '@angular/core';
import { Http, Jsonp, Response, Headers, RequestOptions } from '@angular/http';

import {User} from "./user";
import {Album} from "./album";
import {Photo} from "./photo";


import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{

private headers = new Headers({'Content-Type': 'application/json'});	
private  url="https://jsonplaceholder.typicode.com";

constructor(private http: Http) { }


public getAlbum(userid:number): Promise<Album[]> {
    
    return this.http.get(this.url+"/albums?userId="+userid)
               .toPromise()
               .then(response => {
               console.log(response);
               return response["_body"] as Album[];
               })
               .catch(this.handleError);
               
  }


public getUsers(): Promise<User[]> {
    
    return this.http.get(this.url+"/users")
               .toPromise()
               .then(response => {

               return response["_body"] as User[];
               })
               .catch(this.handleError);
               
  }

public getPhotos(albumid:number): Promise<Photo[]> {
    
    return this.http.get(this.url+"/photos?albmId="+albumid)
               .toPromise()
               .then(response => {

               return response["_body"] as Photo[];
               })
               .catch(this.handleError);
               
  }  


private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } 


}