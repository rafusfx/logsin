import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user:User = new User();

  constructor(private userSvc:UserService) { }

  ngOnInit() {
  }

  createUser(){
    this.userSvc.createUser(this.user);
    this.user = new User();
  }

}
