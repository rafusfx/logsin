import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  user: Observable<firebase.User>;
  name: any;
  state: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase,private router: Router) {
     this.user = this.afAuth.authState; 
    
      if(this.user) {
        this.name = "Bro";
         var uid  =   this.afAuth.auth.currentUser.uid;
          var exist = firebase.database().ref().child("/users/" + uid).once("value", function(snapshot) {
              
              var userData = snapshot.val();    
            
              if(userData){
                  console.log("exist!!");
                  return true;
                    
                }else{
                  return true;
                }
          });
           
        if(exist){
          this.router.navigateByUrl('/users/users-list');
        }
       
      }
  
  }

  logout() {
     this.afAuth.auth.signOut();
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }
}
