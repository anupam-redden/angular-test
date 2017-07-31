import { Component,Input, OnInit } from '@angular/core';
import {UserService} from './user.service';
import { Router,ActivatedRoute, Params  }            from '@angular/router';
import {Location} from '@angular/common';

import {Photo} from "./photo";


@Component({
  selector: 'photo-list',
  templateUrl: './photo.component.html',
  styleUrls: ['./app.component.css']
})

export class PhotoComponent implements OnInit {

   photos:Photo[];
   hideBigdiv:boolean;
   big_image:string;

   constructor( private userService: UserService,private activatedRoute: ActivatedRoute,private _location:Location){


   }
	
   getPhoto(album_id:number):void{
            this.userService
            .getPhotos(album_id)
            .then(photos=>{
                   this.photos=[];
                   var photos_list=JSON.parse(photos.toString());
                   for(var p=0;p<5;p++){
                      
                      this.photos[p]=photos_list[p];   


                   }

            });
   }

   showBigImahe(photo:Photo):void{
        this.big_image=photo.url;
        this.hideBigdiv=false
   }
   backToMain():void{
     this.hideBigdiv=true;
     this.big_image="";
   }
   backPrev():void{
        this._location.back();

    }

   ngOnInit():void{
      this.hideBigdiv=true;
      this.activatedRoute.params.subscribe((params: Params) => {
        let albumid = params['albumid'];
        this.getPhoto(albumid);
        

      });

   }


}