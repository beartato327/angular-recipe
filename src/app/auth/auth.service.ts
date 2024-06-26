import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

/* interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
} */

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: Auth) {
    this.authStatusListener();
  }

  public currentUser: any= null;

  user = signal('')


  authStatusListener() {
    return this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
        this.user.set(this.currentUser.email)
      }
      else {
        this.user.set('');
      }
    });
  }

  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then((userCredential) =>{
      const user = userCredential.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  logout() {
    return this.auth.signOut();
  }
}
