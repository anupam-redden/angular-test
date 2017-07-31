import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import { Router }            from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./app.component.css']
})
export class UserComponent  implements OnInit {
  title = 'app';
  users:User[];

   constructor( private userService: UserService,private router: Router){
             

   }

    getUsers(): void {
	    this.userService
	        .getUsers()
	        .then(users => {
	            
	            this.users=JSON.parse(users.toString())  
                
	            
	           
	        });
    }

    ngOnInit(): void {
	    this.getUsers();

	}

	getdetail(user:User):void{
	    var id=user.id;
	    this.router.navigate(['/detail', user.id]);
	}
}
