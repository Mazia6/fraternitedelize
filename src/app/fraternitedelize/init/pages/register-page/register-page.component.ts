import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/fraternitedelize/services';
import { User } from 'src/app/fraternitedelize/shared';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  @Input() config: any[] = [];

  cpf: Observable<any>;
  user: User;
  key: string = '';

  form: any;
  datePoints;

  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = new User();
  }


  onSubmit() {
    this.userService.createUser(this.user)
    this.router.navigateByUrl('/fraternitedelize/init')
    return this.user = new User();
  }

}
