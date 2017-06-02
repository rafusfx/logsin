import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  error: any;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase,private router: Router) {
      this.items = af.list('/messages', {
        query: {
          limitToLast: 50
        }
      });
      this.user = this.afAuth.authState;     
     
    
      if(this.user){
        this.router.navigateByUrl('/members');
      }
  }

  loginFb() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(function(result){

      console.log(result.user);
      this.router.navigate(['/members']);
      

    }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(function(result){

         console.log(result.user);
      this.router.navigate(['/members']);
     

    }).catch(
        (err) => {
        this.error = err;
      })
  }


  ngOnInit() {
  }

}
