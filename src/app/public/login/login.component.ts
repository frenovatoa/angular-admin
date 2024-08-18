import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../public.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup; // It is better add the ! postfix operator to tell TypeScript that this variable will be initialized later.

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit() {
    this.authService.login(this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/'])
    );
  }

}
