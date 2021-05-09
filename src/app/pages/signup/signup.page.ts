import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userForm: FormGroup;
  constructor(private authService :AuthService, private toastCtrl:ToastController) { }

  ngOnInit() {
  }
  signUp(loginForm:NgForm) {

    this.authService.createUser(loginForm.value).then();

  }


}
