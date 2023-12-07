import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {UserDetailsPageComponent} from "./pages/user-details-page/user-details-page.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";

export const routes: Routes = [
  {
    path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'users', pathMatch:'full'},
      {
        path:'users', component: UserPageComponent, children:[
          {path:':id', component: UserDetailsPageComponent}
        ]
      },
      {path:'posts', component: PostsPageComponent}
    ]
  }
];
