import { Component,Input, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import { Router,ActivatedRoute, Params  }            from '@angular/router';
import {Location} from '@angular/common';
import {Album} from "./album";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./app.component.css']
})
export class UserDetailComponent  implements OnInit{
  title = 'app';
  user:User;
  albums:Album[];

   constructor( private userService: UserService,private router: Router,private activatedRoute: ActivatedRoute,private _location:Location){


   }

    getUsers(id:number): void {
	    this.userService
	        .getUsers()
	        .then(users => {

	            let list_users=JSON.parse(users.toString())

              for(let ur in list_users){

                  if(list_users[ur].id==id){
                     this.user=list_users[ur];
                  }
              }

	        });
    }

    getAlbums(userid:number): void {
	    this.userService
	        .getAlbum(userid)
	        .then(albums => {

	             this.albums=JSON.parse(albums.toString())

              

	        });
    }
    showImages(albumid:number):void{

         this.router.navigate(['/album', albumid]);
    }

    backPrev():void{
        this._location.back();

    }
    ngOnInit(): void {
         this.activatedRoute.params.subscribe((params: Params) => {
        let userId = params['id'];
        this.getUsers(userId);
        this.getAlbums(userId);

      });

    }


}
