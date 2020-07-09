import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

/**
 * component หน้าล็อคอิน
 *
 * @export
 * @class LoginAdminComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.less']
})
export class LoginAdminComponent implements OnInit {
/**
 * Creates an instance of LoginAdminComponent.
 * @param {AuthService} auth - เรียกใช้ Auth Service
 * @memberof LoginAdminComponent
 */
constructor(public auth: AuthService) { }


  ngOnInit(): void {
  }

}