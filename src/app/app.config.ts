import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"cut-the-bull","appId":"1:895982368692:web:2b1f7f124faf6ca69ae4e1","storageBucket":"cut-the-bull.appspot.com","apiKey":"AIzaSyBBn659p3fUw7M3Yv7bqLhduKJkwQ_1_b0","authDomain":"cut-the-bull.firebaseapp.com","messagingSenderId":"895982368692","measurementId":"G-0E5H8RTLCV"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
