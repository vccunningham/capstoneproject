import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  users: User = new User();

  constructor(
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.usersvc.change(this.users).subscribe(
      acceptance => {
        console.debug("User has been saved.", acceptance);
      },
      failure => {
        console.error("Error. User not saved. Try again.", failure);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      acceptance => {
        console.debug("User has been edited.", acceptance);
      },
      failure => {
        console.error("Unsuccessful", failure);
      }
    ); 
    
  }

}
