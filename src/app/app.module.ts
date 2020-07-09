import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';

import firebase from '@firebase/app';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminGuard } from './services/admin.guard';


/**
 * @const {string}
 * @description - link of google logo
 */
const googleLogoURL =
  'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
/**
 * Main component
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseApp),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    AngularFirestoreModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [AuthGuard, AuthService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        'logo',
        this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
    }
}