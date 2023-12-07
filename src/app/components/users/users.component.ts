import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IPost, IUser} from "../../interfaces/user.inerface";
import {UserComponent} from "../user/user.component";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {PostDetailComponent} from "../post-details/post-detail.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    FormsModule,
    NgForOf,
    PostDetailComponent,
    NgIf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
  
})
export class UsersComponent implements OnInit{
  users:IUser[]
  userPosts:IPost[]
  userId:number
  constructor(private usersService:UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value =>this.users=value)
  }

  getPost(userId:number) {
   this.usersService.getById(userId).subscribe(value => this.userPosts=value)
  }
}
