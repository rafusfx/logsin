import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
@Input() user: User;

  constructor(private userSvc:UserService) { }

  ngOnInit() {
  }

  updateTimeStamp(){
    let date = new Date();
    this.userSvc.updateUser(this.user.$key,{timeStamp:date});
  }

  updateActive(value: boolean){
    this.userSvc.updateUser(this.user.$key,{active:value});

  }

  deleteUser(){
    this.userSvc.deleteUser(this.user.$key);
  }

}
