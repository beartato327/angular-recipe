import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private auth: Auth) {}

  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    /* return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBBn659p3fUw7M3Yv7bqLhduKJkwQ_1_b0',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ); */
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then((userCredential) =>{
      const user = userCredential.user;
      console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
