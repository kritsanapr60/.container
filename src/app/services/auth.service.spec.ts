import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { APP_BASE_HREF } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


describe('AuthService', () => {
  let service: AuthService;

  const config = {
    apiKey: 'AIzaSyAIqohg5_f_VBJkNydAN_fDcZIU4kexOBM',
    authDomain: 'incubate-internship-2020.firebaseapp.com',
    databaseURL: 'https://incubate-internship-2020.firebaseio.com',
    projectId: 'incubate-internship-2020',
    storageBucket: 'incubate-internship-2020.appspot.com',
    messagingSenderId: '737851649336',
    appId: '1:737851649336:web:8456a2de3d168ac62b25cd',
    measurementId: 'G-H2QLLHPJ7Q'
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginAdminComponent
      ],
      imports: [
        // firebase.initializeTestApp({
        //   projectId: 'my-test-project',
        //   auth: { uid: 'alice', email: 'alice@example.com' }
        // }),
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule,
        RouterModule,
        AppRoutingModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatSelectModule,
        FlexLayoutModule,
        MatInputModule,
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  // it('should return true if loggedIn is true', () => {
  //   expect(service.user$).toBeFalsy();
  //   authService.loggedIn = true;
  //   expect(service.user$).toBeTruthy();
  // });

  // it('user should be null', () => {
  //   console.log(service.user$);
  //   expect(service.user$).toBeFalse();
  // });
  // it('should return a rejected promise', () => {
  //   authState = {
  //     email: 'lanchanagupta@gmail.com',
  //     password: 'password',
  //   };

  //   mockAngularFireAuth = {
  //     auth: jasmine.createSpyObj('auth', {
  //       'signInWithPopup': Promise.reject({
  //         code: 'auth/account-exists-with-different-credential'
  //       }),
  //     }),
  //     authState: Observable.of(authState)
  //   };
  //   mockAngularFireAuth.auth.signInWithPopup()
  //     .catch((error: { code: string }) => {
  //       expect(error.code).toBe('auth/account-exists-with-different-credential');
  //     });
  // });


  // it('should return a resolved promise', () => {
  //   authState = {
  //     email: 'lanchanagupta@gmail.com',
  //     password: 'password',
  //     uid: 'nuDdbfbhTwgkF5C6HN5DWDflpA83'
  //   };

  //   mockAngularFireAuth = {
  //     auth: jasmine.createSpyObj('auth', {
  //       'signInWithPopup': Promise.resolve({
  //         user: authState
  //       }),
  //     })
  //   };
  //   mockAngularFireAuth.auth.signInWithPopup()
  //     .then(data => {
  //       expect(data['user']).toBe(authState);
  //     });
  // });


});