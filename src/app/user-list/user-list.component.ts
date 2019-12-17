import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private UserService: UserService) { }

  dados: User[];
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.UserService.getAll().subscribe((userOut: User[]) => {
      this.dados = userOut;
      console.log(this.dados);
    })
  }

}
