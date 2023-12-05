import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces/user.inerface";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

@Input()
userPost: IPost
}
