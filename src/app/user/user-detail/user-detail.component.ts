import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();

  constructor(
    private usersvc: UserService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  delete(): void{
    this.usersvc.remove(this.user).subscribe(
      res => {
        console.debug("User has been deleted.", res);
        this.router.navigateByUrl("/user/list");
      },
      err => {
        console.error("Error when attemtping to delete this User. Please try again.", err)
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        this.user = res;
        console.debug("Major:", res);
      },
      err => {
        console.error("Error on Major.get()", err);
      }
    );
  }

}
