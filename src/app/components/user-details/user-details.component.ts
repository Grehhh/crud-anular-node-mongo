import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() contact: any;

  constructor(private userService: UserService,private route:ActivatedRoute) { }

  getUserById():void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.userService.getOne(id)
    .subscribe(data => {
      this.contact = data;
    })
  }

  ngOnInit() {
    this.getUserById();
  }

}
