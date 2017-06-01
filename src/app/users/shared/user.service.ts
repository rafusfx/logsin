import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {User} from './user';

@Injectable()
export class UserService {
private basePath:string = '/users';
users: FirebaseListObservable<User[]> = null;
user: FirebaseObjectObservable<User> = null;


constructor(private db: AngularFireDatabase) { }

getUsersList(query={}): FirebaseListObservable<User[]>{
  this.users = this.db.list(this.basePath,{query:query});
  return this.users;
}

getUser(key:string): FirebaseObjectObservable<User>{
  const userPath = `${this.basePath}/${key}`;
  this.user = this.db.object(userPath);
  return this.user;
}

createUser(user:User):void{
  this.users.push(user).catch(error => console.log(error));
}

updateUser(key:string, value:any):void{
  this.users.update(key,value).catch(error => console.log(error));
}

deleteUser(key:string):void{
  this.users.remove(key).catch(error => console.log(error));
}

deleteAll():void{
  this.users.remove().catch(error => console.log(error));
}


}
