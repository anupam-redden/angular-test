import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  users:User[];

   constructor( private userService: UserService){
             

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
}
