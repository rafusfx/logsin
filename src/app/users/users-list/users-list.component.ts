import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';
import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UserService]
})
export class UsersListComponent implements OnInit {
  public users: FirebaseListObservable<User[]>;

  constructor(private userSvc:UserService) { }


  ngOnInit() {
    this.users = this.userSvc.getUsersList({limitToLast:5});
  }

  deleteUsers(){
    this.userSvc.deleteAll();
  }

}
