import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  constructor(
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.usersvc.create(this.user).subscribe(
      acceptance => {
        console.debug("The user has been created.", acceptance)
        this.router.navigateByUrl("/users/list");
      },
      failure => {
        console.error("The was an error creating the user. Please try again.", failure)
      }
    );
  }

  ngOnInit(): void {
  }

}
