import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  contacts: any = [];

  constructor(public userService: UserService) { }

  getAllUsers() {
    this.userService.getAll()
    .subscribe(
      (data) => {
        this.contacts = data;
        console.log(data);
      },
      (error) => {
        console.error(error)
      });
  }

  // getOneUser(contact_id) {
  //   this.userService.getOne(contact_id).su
  // }


  ngOnInit() {
    this.getAllUsers();
  }

}
