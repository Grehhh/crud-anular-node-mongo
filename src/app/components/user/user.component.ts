import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  contacts: any = [];
  selectedContact: any; 

  constructor(public userService: UserService) { }

  onSelect(contact: any): void {
    this.selectedContact = contact;
    console.log('hola')
  }

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

  // getOneUser(name) {
  //   this.userService.getOne(name)
  //   .subscribe(
  //     (data) => {
  //       this.contacts = data;
  //     },
  //     (error) => {
  //       console.error(error);
  //     });
  // }


  ngOnInit() {
    this.getAllUsers();
  }

}
